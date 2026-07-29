'use strict'

/**
 * Generates the v1 -> v2 migration tables consumed by the weclapp-api-v2-migration skill.
 *
 * Two outputs, both written to migration/:
 *
 *   v1-to-v2-methods.json  Maps every v1 client method to its v2 counterpart. Matching is done
 *                          on the request itself (HTTP verb + URL path extracted from the module
 *                          source), not on method names -- v1 names are historically inconsistent
 *                          ('updateArticleById' vs 'updateArticleCategoryForId') so name patterns
 *                          would produce wrong matches. Anything without exactly one counterpart
 *                          is reported as needing a human decision.
 *
 *   v1-to-v2-fields.json   Property-level diff of the two OpenAPI specs: removed properties,
 *                          rename candidates, the secondary *Name/*Number properties that v2
 *                          dropped in favour of includeReferencedEntities, and the readOnly
 *                          properties a v2 write payload must not contain.
 *
 * Run with: npm run generate:migration-map
 */

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const ROOT = path.join(__dirname, '..')
const V1_DIR = path.join(ROOT, 'src', 'endpoints')
const V2_DIR = path.join(ROOT, 'src', 'endpoints', 'v2')
const SPEC_V1 = path.join(ROOT, 'apidoc', 'weclapp-openapi-v1.yaml')
const SPEC_V2 = path.join(ROOT, 'apidoc', 'weclapp-openapi-v2.yaml')
const OUT_DIR = path.join(ROOT, 'migration')

// Resources v2 removed outright; all of them fold into /party.
const REMOVED_RESOURCES = {
	contact: 'party',
	customer: 'party',
	lead: 'party',
	supplier: 'party'
}

/**
 * Renames documented in https://www.weclapp.com/api/changelogV2.html that the string-similarity
 * heuristic below cannot find, because old and new name barely share any characters.
 *
 * Hand-maintained on purpose: without these, the affected properties look like plain removals,
 * and a migration would delete the field instead of renaming it. Keys are either a bare property
 * name (applies to every schema) or `schema.property` for a schema-specific rename. An array
 * value means the changelog offers more than one target -- those need a human decision.
 */
const KNOWN_RENAMES = {
	'disableEmailTemplate': 'disableRecordEmailingRule',
	'supplierArticleId': 'articleSupplySourceId',
	'moneyTransactionId': ['bankTransactionId', 'cashAccountTransactionId'],
	'blanketPurchaseOrder.comment': 'note',
	'party.allowPurchaseOrderCreation': null
}

/**
 * Documented successors for endpoints this client calls that were never in weclapp's own v1 spec.
 *
 * Established by comparing both specs; the semantics are not guaranteed to be identical, which is
 * why these stay suggestions. Methods absent from this table have no successor at all.
 */
const UNDOCUMENTED_ALTERNATIVES = {
	getWarehouseLevels: {
		resource: 'storageLocation',
		confidence: 'high',
		note: 'documented in both v1 and v2 with the same schema, including warehouseId; filter changes from deleted-eq to active-eq'
	},
	getWarehouseLevelById: {
		resource: 'storageLocation',
		confidence: 'high',
		note: 'see getWarehouseLevels'
	},
	getWarehouseLevelCount: {
		resource: 'storageLocation',
		confidence: 'high',
		note: 'see getWarehouseLevels'
	},
	createBookTransferMovement: {
		resource: 'warehouseStockMovement/bookDirectStockTransfer',
		confidence: 'low',
		note: 'closest documented v2 operation -- verify the booking semantics match before porting'
	},
	createPrepaymentInvoiceForId: {
		resource: 'salesOrder/id/{id}/createPrepaymentFinalInvoice',
		confidence: 'low',
		note: 'v2 only offers a *final* prepayment invoice -- confirm that is the same document'
	}
}

/**
 * Call-site rewrites for the methods a plain rename cannot fix.
 *
 * They share one cause: v1 packs `id` (and other keys) into a leading options object, while the
 * generated v2 methods take `id` positionally and everything else in a trailing query object.
 * The transformation cannot be derived from the signatures alone -- which keys are lifted out and
 * how the remainder is passed comes from reading each v1 implementation -- so it is curated here.
 *
 * `v2` is cross-checked against the counterpart found in the module sources on every run, so a
 * rule that no longer matches reality is reported instead of silently applied.
 */
const CALL_REWRITES = {
	createDocument: {
		v2: 'uploadDocumentById',
		lift: ['id'],
		v1Example: 'createDocument({id, comment}, body)',
		v2Example: 'uploadDocumentById(id, body, {comment})'
	},
	createEntityDocument: {
		v2: 'uploadDocument',
		lift: [],
		v1Example: 'createEntityDocument({entityName, entityId, name, description}, body)',
		v2Example: 'uploadDocument(body, {entityName, entityId, name, description})',
		note: 'options object moves from the first to the last argument'
	},
	getArticleImage: {
		v2: 'downloadArticleImageById',
		lift: ['id'],
		v1Example: 'getArticleImage({id, articleImageId, preview, scaleWidth, scaleHeight})',
		v2Example: 'downloadArticleImageById(id, {articleImageId, preview, scaleWidth, scaleHeight})',
		note: 'v1 defaulted preview to false; v2 has no default, so pass it explicitly if the caller relied on it'
	},
	uploadArticleImage: {
		v2: 'uploadArticleImageById',
		lift: ['id'],
		v1Example: 'uploadArticleImage({id, name, mainImage}, body)',
		v2Example: 'uploadArticleImageById(id, body, {name, mainImage})'
	},
	updateArticleById: {
		v2: 'updateArticleById',
		lift: ['id', 'body'],
		v1Example: 'updateArticleById({id, body, ...rest})',
		v2Example: 'updateArticleById(id, {...body, ...rest})',
		note: 'same method name, incompatible call -- v1 merged the leftover keys into the body, so a codemod must match on the argument shape, not the name'
	},
	getMetaQueryFilterProperties: {
		v2: 'queryFilterPropertiesMeta',
		lift: [],
		v1Example: 'getMetaQueryFilterProperties(resource)',
		v2Example: 'queryFilterPropertiesMeta({resource})',
		note: 'scalar argument becomes a query property'
	},
	getMetaQuerySortProperties: {
		v2: 'querySortPropertiesMeta',
		lift: [],
		v1Example: 'getMetaQuerySortProperties(resource)',
		v2Example: 'querySortPropertiesMeta({resource})',
		note: 'scalar argument becomes a query property'
	},
	getCustomAttributeDefinitionByIds: {
		v2: 'queryCustomAttributeDefinition',
		lift: [],
		v1Example: 'getCustomAttributeDefinitionByIds(ids)',
		v2Example: 'queryCustomAttributeDefinition({\'id-in\': `[${ids}]`})',
		note: 'v1 had the filter in the URL; v2 needs it passed explicitly'
	},
	getContactImageById: {
		v2: 'downloadImagePartyById',
		lift: ['id'],
		v1Example: 'getContactImageById({id, scaleWidth, scaleHeight})',
		v2Example: 'downloadImagePartyById(id, {scaleWidth, scaleHeight})'
	},
	getCustomerImageById: {
		v2: 'downloadImagePartyById',
		lift: ['id'],
		v1Example: 'getCustomerImageById({id, scaleWidth, scaleHeight})',
		v2Example: 'downloadImagePartyById(id, {scaleWidth, scaleHeight})'
	},
	getLeadImage: {
		v2: 'downloadImagePartyById',
		lift: ['id'],
		v1Example: 'getLeadImage({id, scaleWidth, scaleHeight})',
		v2Example: 'downloadImagePartyById(id, {scaleWidth, scaleHeight})'
	},
	getSupplierImage: {
		v2: 'downloadImagePartyById',
		lift: ['id'],
		v1Example: 'getSupplierImage({id, scaleWidth, scaleHeight})',
		v2Example: 'downloadImagePartyById(id, {scaleWidth, scaleHeight})'
	}
}

/* ------------------------------------------------------------------ *
 * Module parsing
 * ------------------------------------------------------------------ */

/**
 * Normalises a URL expression from the module source into a comparable path.
 * Template placeholders collapse to {id} / {param} so v1 and v2 paths line up.
 */
function normalisePath(raw) {
	const normalised = raw
		.replace(/\$\{\s*id\s*\}/g, '{id}')
		.replace(/\$\{[^}]*\}/g, '{param}')
		.replace(/^\/+/, '')
		.trim()

	// Some v1 methods are convenience wrappers with a filter baked into the URL
	// (`customAttributeDefinition?id-in=[...]`). The path is what identifies the
	// operation; the hard-coded query has to be passed explicitly in v2, so keep
	// it separately rather than dropping it.
	const queryStart = normalised.indexOf('?')
	if (queryStart === -1) return {path: normalised, hardcodedQuery: null}

	return {
		path: normalised.slice(0, queryStart),
		hardcodedQuery: normalised.slice(queryStart + 1)
	}
}

/**
 * Reduces a method's parameter list (minus the injected `fetch`) to a list of
 * {token, optional} entries, so a rename can be checked for call-site compatibility.
 */
function signatureShape(paramSrc) {
	const params = []
	let depth = 0
	let current = ''

	for (const char of paramSrc) {
		if (char === '{' || char === '[') depth++
		if (char === '}' || char === ']') depth--
		if (char === ',' && depth === 0) {
			params.push(current.trim())
			current = ''
			continue
		}
		current += char
	}
	if (current.trim()) params.push(current.trim())

	// drop the injected fetch argument
	params.shift()

	return params.map(p => {
		const optional = p.includes('=')
		const declaration = p.split('=')[0].trim()

		if (declaration.startsWith('{')) return {token: 'query', optional}
		if (declaration === 'id') return {token: 'id', optional}
		if (declaration === 'body') return {token: 'body', optional}
		return {token: `scalar:${declaration}`, optional}
	})
}

function shapeLabel(shape) {
	return shape.length ? shape.map(p => p.token).join('+') : 'none'
}

/**
 * True when every existing v1 call site keeps working after a plain rename.
 *
 * The generated v2 methods almost always append one optional query object
 * (`{...rest} = {}`) that v1 did not have. That is additive: positional arguments
 * still line up and the extra parameter defaults. Only a change to the leading
 * parameters -- an id moving from the query object into a positional slot, say --
 * actually breaks callers.
 */
function isCallCompatible(v1Shape, v2Shape) {
	if (v2Shape.length < v1Shape.length) return false

	for (let i = 0; i < v1Shape.length; i++) {
		if (v1Shape[i].token !== v2Shape[i].token) return false
	}

	return v2Shape.slice(v1Shape.length).every(p => p.optional)
}

/**
 * Extracts every method of an endpoint module together with the request it issues.
 */
function parseModule(source) {
	const methods = []
	const header = /async\s+([A-Za-z0-9_$]+)\s*\(/g
	let match

	while ((match = header.exec(source)) !== null) {
		const name = match[1]

		// parameter list: scan from the opening paren to its match
		let depth = 1
		let i = header.lastIndex
		const paramStart = i
		while (i < source.length && depth > 0) {
			if (source[i] === '(') depth++
			if (source[i] === ')') depth--
			i++
		}
		const paramSrc = source.slice(paramStart, i - 1)

		// body: up to the next method header (or end of module)
		header.lastIndex = i
		const nextHeader = /async\s+[A-Za-z0-9_$]+\s*\(/g
		nextHeader.lastIndex = i
		const next = nextHeader.exec(source)
		const body = source.slice(i, next ? next.index : source.length)

		const urlMatch =
			/buildUrl\(\s*(['"`])([^'"`]+)\1/.exec(body) ||
			/fetch\(\s*(['"`])([^'"`]+)\1/.exec(body)
		const methodMatch = /method:\s*['"`](\w+)['"`]/.exec(body)
		const responseTypeMatch = /responseType:\s*['"`](\w+)['"`]/.exec(body)

		if (!urlMatch) continue

		const {path: requestPath, hardcodedQuery} = normalisePath(urlMatch[2])

		methods.push({
			name,
			httpMethod: (methodMatch ? methodMatch[1] : 'GET').toUpperCase(),
			path: requestPath,
			hardcodedQuery,
			signature: signatureShape(paramSrc),
			responseType: responseTypeMatch ? responseTypeMatch[1] : null
		})

		header.lastIndex = next ? next.index : source.length
	}

	return methods
}

function collectMethods(dir, {recurse = false} = {}) {
	const out = []

	for (const file of fs.readdirSync(dir)) {
		const full = path.join(dir, file)
		if (fs.statSync(full).isDirectory()) {
			if (recurse) out.push(...collectMethods(full, {recurse}))
			continue
		}
		if (!file.endsWith('.js') || file === 'index.js') continue

		const module_ = path.basename(file, '.js')
		for (const method of parseModule(fs.readFileSync(full, 'utf8'))) {
			out.push({...method, module: module_})
		}
	}

	return out
}

/* ------------------------------------------------------------------ *
 * Method map
 * ------------------------------------------------------------------ */

function requestKey(method) {
	return `${method.httpMethod} ${method.path}`
}

function resourceOf(pathStr) {
	return pathStr.split('/')[0]
}

function buildMethodMap(specV1Paths) {
	const v1 = collectMethods(V1_DIR)
	const v2 = collectMethods(V2_DIR)

	const v2ByRequest = new Map()
	for (const method of v2) {
		const key = requestKey(method)
		if (!v2ByRequest.has(key)) v2ByRequest.set(key, [])
		v2ByRequest.get(key).push(method)
	}

	const v2Resources = new Set(v2.map(m => resourceOf(m.path)))

	const mapped = []
	const decisions = []

	for (const method of v1) {
		const candidates = v2ByRequest.get(requestKey(method)) || []
		const resource = resourceOf(method.path)

		const entry = {
			v1: method.name,
			module: method.module,
			request: requestKey(method),
			v1Signature: shapeLabel(method.signature)
		}

		if (method.hardcodedQuery) {
			entry.hardcodedQuery = method.hardcodedQuery
			entry.note = 'v1 baked this filter into the URL -- v2 needs it passed as a query argument'
		}

		if (candidates.length === 1) {
			const target = candidates[0]
			const compatible = isCallCompatible(method.signature, target.signature)
			const record = {
				...entry,
				v2: target.name,
				v2Signature: shapeLabel(target.signature),
				callCompatible: compatible
			}

			// A plain rename would silently drop the filter the v1 wrapper had in its URL.
			if (method.hardcodedQuery) {
				decisions.push({...record, reason: 'hardcoded-filter'})
				continue
			}

			// A rename alone is not enough here: the argument order changed too.
			if (!compatible) {
				record.note = 'leading parameters differ -- call sites must be rewritten, not just renamed'
				decisions.push({...record, reason: 'signature-breaking'})
				continue
			}

			mapped.push(record)
			continue
		}

		if (candidates.length > 1) {
			decisions.push({
				...entry,
				reason: 'ambiguous',
				candidates: candidates.map(c => ({name: c.name, signature: shapeLabel(c.signature)}))
			})
			continue
		}

		if (REMOVED_RESOURCES[resource]) {
			const replacement = REMOVED_RESOURCES[resource]

			// The URL shape usually survives (GET /customer/id/{id} -> GET /party/id/{id}), so a
			// counterpart can be suggested. It stays a suggestion: /party unifies four former
			// resources, so whether the ids and role semantics carry over is a per-app question
			// that no spec can answer. Never apply these automatically.
			const suggestedPath = `${replacement}${method.path.slice(resource.length)}`
			const suggestions = v2ByRequest.get(`${method.httpMethod} ${suggestedPath}`) || []
			const suggestion = suggestions.length === 1 ? suggestions[0] : null

			decisions.push({
				...entry,
				reason: 'resource-removed',
				replacementResource: replacement,
				requiresReview: true,
				suggestedV2: suggestion ? suggestion.name : null,
				suggestedV2Signature: suggestion ? shapeLabel(suggestion.signature) : null,
				suggestionCallCompatible: suggestion
					? isCallCompatible(method.signature, suggestion.signature)
					: null,
				note: suggestion
					? `/${resource} folded into /${replacement}; same URL shape, but verify id and role semantics per call site`
					: `/${resource} folded into /${replacement}, and this operation has no direct counterpart`
			})
			continue
		}

		// Some v1 client methods hit endpoints that were never in weclapp's own v1 spec --
		// undocumented or long-dead. "What replaces this in v2?" is the wrong question for
		// those; the question is whether anything still calls them and whether they work at all.
		if (!specV1Paths.has(`/${method.path}`)) {
			const alternative = UNDOCUMENTED_ALTERNATIVES[method.name] || null
			decisions.push({
				...entry,
				reason: 'undocumented-in-v1',
				documentedAlternative: alternative,
				note: alternative
					? 'absent from the v1 spec too, but a documented endpoint covers it -- see documentedAlternative'
					: 'absent from the v1 spec too and no documented successor -- check whether anything still calls it before porting'
			})
			continue
		}

		decisions.push({
			...entry,
			reason: v2Resources.has(resource) ? 'operation-removed' : 'resource-removed-undocumented',
			note: v2Resources.has(resource)
				? `documented in v1, but /${method.path} has no v2 counterpart`
				: `resource /${resource} has no v2 counterpart`
		})
	}

	// Attach the curated call-site rewrites and validate them against what was actually found in
	// the sources. A rule pointing at the wrong target, or one whose method no longer needs it,
	// is reported rather than shipped -- otherwise a codemod would rewrite call sites wrongly.
	const rewriteProblems = []
	const unclaimedRewrites = new Set(Object.keys(CALL_REWRITES))

	for (const entry of decisions) {
		const rewrite = CALL_REWRITES[entry.v1]
		if (!rewrite) continue
		unclaimedRewrites.delete(entry.v1)

		const target = entry.v2 || entry.suggestedV2
		if (target && target !== rewrite.v2) {
			rewriteProblems.push({
				v1: entry.v1,
				problem: 'target-mismatch',
				ruleTarget: rewrite.v2,
				actualTarget: target
			})
			continue
		}

		entry.rewrite = rewrite
		// The /party rewrites are mechanically correct but still carry the data model question.
		entry.rewriteMechanical = entry.reason !== 'resource-removed'
	}

	for (const entry of mapped) {
		if (!CALL_REWRITES[entry.v1]) continue
		unclaimedRewrites.delete(entry.v1)
		rewriteProblems.push({
			v1: entry.v1,
			problem: 'rule-not-needed',
			note: 'a plain rename now suffices for this method'
		})
	}

	for (const name of unclaimedRewrites) {
		rewriteProblems.push({v1: name, problem: 'no-such-v1-method'})
	}

	// Same staleness check for the curated successors: a rule for a method that is no longer
	// classified as undocumented points at an assumption that has changed.
	const claimedAlternatives = new Set(
		decisions.filter(d => d.reason === 'undocumented-in-v1').map(d => d.v1)
	)
	for (const name of Object.keys(UNDOCUMENTED_ALTERNATIVES)) {
		if (!claimedAlternatives.has(name)) {
			rewriteProblems.push({v1: name, problem: 'alternative-rule-unused'})
		}
	}

	// Several v1 methods can legitimately target one v2 method (e.g. a filtered convenience
	// wrapper next to the plain query). Flag them so the codemod does not silently collapse
	// call sites with different arguments.
	const targetCount = new Map()
	for (const entry of mapped) targetCount.set(entry.v2, (targetCount.get(entry.v2) || 0) + 1)
	for (const entry of mapped) {
		if (targetCount.get(entry.v2) > 1) entry.sharedTarget = true
	}

	return {
		contract: {
			mapped: 'safe to apply mechanically -- same request, and every existing call site keeps working',
			decisions: 'never apply automatically; each entry needs a human decision, even where a suggestedV2 is given',
			rewrite: 'where present, the argument transformation for that call site; rewriteMechanical means it needs no judgement beyond applying it',
			rewriteProblems: 'must be empty -- a non-empty list means a curated rewrite rule no longer matches the sources'
		},
		v1MethodCount: v1.length,
		v2MethodCount: v2.length,
		rewriteProblems,
		mapped: mapped.sort((a, b) => a.v1.localeCompare(b.v1)),
		decisions: decisions.sort((a, b) => a.v1.localeCompare(b.v1))
	}
}

/* ------------------------------------------------------------------ *
 * Field map
 * ------------------------------------------------------------------ */

/**
 * Flattens a schema's properties, following allOf composition (which is how the
 * weclapp specs express inheritance) and nested object properties.
 */
function flattenProperties(schema, prefix = '', out = new Map()) {
	if (!schema || typeof schema !== 'object') return out

	if (Array.isArray(schema.allOf)) {
		for (const part of schema.allOf) flattenProperties(part, prefix, out)
	}

	if (schema.properties) {
		for (const [key, value] of Object.entries(schema.properties)) {
			out.set(prefix + key, value || {})
			if (value && value.properties) flattenProperties(value, `${prefix}${key}.`, out)
		}
	}

	return out
}

function similarity(a, b) {
	const s1 = a.toLowerCase()
	const s2 = b.toLowerCase()
	const rows = Array.from({length: s1.length + 1}, (_, i) => [i, ...Array(s2.length).fill(0)])
	for (let j = 0; j <= s2.length; j++) rows[0][j] = j

	for (let i = 1; i <= s1.length; i++) {
		for (let j = 1; j <= s2.length; j++) {
			rows[i][j] = Math.min(
				rows[i - 1][j] + 1,
				rows[i][j - 1] + 1,
				rows[i - 1][j - 1] + (s1[i - 1] === s2[j - 1] ? 0 : 1)
			)
		}
	}

	const distance = rows[s1.length][s2.length]
	return 1 - distance / Math.max(s1.length, s2.length)
}

function buildFieldMap(specV1, specV2) {
	const schemasV1 = specV1.components.schemas
	const schemasV2 = specV2.components.schemas

	const schemas = {}
	let removedTotal = 0

	for (const name of Object.keys(schemasV1)) {
		if (!schemasV2[name]) continue

		const propsV1 = flattenProperties(schemasV1[name])
		const propsV2 = flattenProperties(schemasV2[name])

		const removed = [...propsV1.keys()].filter(p => !propsV2.has(p))
		const added = [...propsV2.keys()].filter(p => !propsV1.has(p))
		const readOnly = [...propsV2.entries()].filter(([, v]) => v && v.readOnly).map(([k]) => k)

		if (!removed.length && !readOnly.length) continue

		const entries = removed.map(prop => {
			// Changelog-documented renames win over any heuristic below.
			const override = Object.prototype.hasOwnProperty.call(KNOWN_RENAMES, `${name}.${prop}`)
				? KNOWN_RENAMES[`${name}.${prop}`]
				: Object.prototype.hasOwnProperty.call(KNOWN_RENAMES, prop)
					? KNOWN_RENAMES[prop]
					: undefined

			if (override !== undefined) {
				if (override === null) {
					return {
						property: prop,
						kind: 'removed',
						source: 'changelog',
						note: 'documented as removed without replacement',
						silent: true
					}
				}
				if (Array.isArray(override)) {
					return {
						property: prop,
						kind: 'rename-ambiguous',
						candidates: override,
						source: 'changelog',
						note: 'the changelog offers several targets -- pick per call site',
						silent: true
					}
				}
				return {
					property: prop,
					kind: 'rename',
					renamedTo: override,
					source: 'changelog',
					silent: true
				}
			}

			// v2 dropped the secondary *Name / *Number references in favour of the id
			// plus ?includeReferencedEntities=<idProp>, which returns a separate
			// referencedEntities object -- so this is a join, not a substitution.
			const secondary = /^(.*?)(Name|Number)$/.exec(prop)
			if (secondary) {
				const idProp = `${secondary[1]}Id`
				if (propsV2.has(idProp)) {
					return {
						property: prop,
						kind: 'secondary-reference',
						idProperty: idProp,
						replacement: `includeReferencedEntities=${idProp}`,
						silent: true
					}
				}
			}

			// A close-by added property in the same schema is very likely a rename
			// (primeAddress -> primaryAddress).
			let best = null
			for (const candidate of added) {
				const score = similarity(prop, candidate)
				if (score >= 0.6 && (!best || score > best.score)) best = {candidate, score}
			}
			if (best) {
				return {
					property: prop,
					kind: 'rename-candidate',
					renamedTo: best.candidate,
					confidence: Number(best.score.toFixed(2)),
					silent: true
				}
			}

			return {property: prop, kind: 'removed', silent: true}
		})

		removedTotal += entries.length
		schemas[name] = {removed: entries, added, readOnly}
	}

	const values = Object.values(schemas)

	return {
		schemasWithRemovals: values.filter(s => s.removed.length).length,
		removedPropertyCount: removedTotal,
		schemasWithReadOnly: values.filter(s => s.readOnly.length).length,
		readOnlyPropertyCount: values.reduce((n, s) => n + s.readOnly.length, 0),
		removedResources: REMOVED_RESOURCES,
		schemas
	}
}

/* ------------------------------------------------------------------ *
 * Output
 * ------------------------------------------------------------------ */

function provenance() {
	return {
		generatedBy: 'scripts/generate-migration-map.js',
		generatedAt: new Date().toISOString().slice(0, 10),
		sourceSpecs: ['apidoc/weclapp-openapi-v1.yaml', 'apidoc/weclapp-openapi-v2.yaml'],
		note: 'Generated file -- do not edit by hand. Regenerate with: npm run generate:migration-map'
	}
}

function write(file, data) {
	const target = path.join(OUT_DIR, file)
	fs.writeFileSync(target, `${JSON.stringify(data, null, '\t').replace(/\n/g, '\r\n')}\r\n`)
	return target
}

function main() {
	if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, {recursive: true})

	const specV1 = yaml.load(fs.readFileSync(SPEC_V1, 'utf8'))
	const specV2 = yaml.load(fs.readFileSync(SPEC_V2, 'utf8'))

	const methods = buildMethodMap(new Set(Object.keys(specV1.paths || {})))
	const fields = buildFieldMap(specV1, specV2)

	write('v1-to-v2-methods.json', {...provenance(), ...methods})
	write('v1-to-v2-fields.json', {...provenance(), ...fields})

	const byReason = {}
	for (const entry of methods.decisions) byReason[entry.reason] = (byReason[entry.reason] || 0) + 1

	console.log('methods   v1:', methods.v1MethodCount, ' v2:', methods.v2MethodCount)
	console.log('  safe rename          :', methods.mapped.length)
	console.log('  shared v2 target     :', methods.mapped.filter(m => m.sharedTarget).length)
	console.log('  with rewrite rule    :', methods.decisions.filter(d => d.rewrite).length,
		`(${methods.decisions.filter(d => d.rewrite && d.rewriteMechanical).length} mechanical)`)
	console.log('  need a decision      :', methods.decisions.length)
	for (const [reason, count] of Object.entries(byReason).sort((a, b) => b[1] - a[1])) {
		console.log(`    ${reason.padEnd(19)}:`, count)
	}
	console.log('fields    schemas with removals:', fields.schemasWithRemovals, ' properties removed:', fields.removedPropertyCount)
	console.log('          schemas with readOnly:', fields.schemasWithReadOnly, ' readOnly properties:', fields.readOnlyPropertyCount)

	if (methods.rewriteProblems.length) {
		console.log('\nWARNING: curated rewrite rules no longer match the sources:')
		for (const problem of methods.rewriteProblems) {
			console.log(`  ${problem.v1}: ${problem.problem}`, problem.actualTarget ? `(rule says ${problem.ruleTarget}, sources say ${problem.actualTarget})` : '')
		}
		process.exitCode = 1
	}
	console.log('\nwrote migration/v1-to-v2-methods.json and migration/v1-to-v2-fields.json')
}

main()
