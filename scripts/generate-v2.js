'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const SPEC_PATH = path.join(__dirname, '..', 'apidoc', 'weclapp-openapi-v2.yaml')
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'endpoints', 'v2')
const BANNER = '// Generated from weclapp-openapi-v2.yaml — do not edit'
const CRLF = '\r\n'
const TAB = '\t'

const JS_RESERVED = new Set([
	'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch',
	'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
	'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally',
	'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in',
	'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null',
	'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super',
	'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try',
	'typeof', 'undefined', 'var', 'void', 'volatile', 'while', 'with', 'yield'
])

function toPascalCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function toCamelCase(str) {
	return str.replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase())
}

function makeUrlExpr(pathStr) {
	const stripped = pathStr.slice(1)
	if (stripped.includes('{id}')) {
		return `\`${stripped.replace('{id}', '${id}')}\``
	}
	return `'${stripped}'`
}

function resolveParam(spec, paramOrRef) {
	if (paramOrRef.$ref) {
		const key = paramOrRef.$ref.replace('#/components/parameters/', '')
		return (spec.components && spec.components.parameters && spec.components.parameters[key]) || paramOrRef
	}
	return paramOrRef
}

function getHasQuery(spec, allParams) {
	return allParams.some(p => resolveParam(spec, p).in === 'query')
}

function getHasBody(operation) {
	return !!operation.requestBody
}

function getIsBinary(operation) {
	const responses = operation.responses || {}
	for (const resp of Object.values(responses)) {
		if (!resp || !resp.content) continue
		for (const [contentType, mediaType] of Object.entries(resp.content)) {
			const schema = (mediaType && mediaType.schema) || {}
			if (schema.format === 'binary') return true
			if (contentType.startsWith('image/')) return true
			if (contentType === 'application/pdf') return true
			if (contentType === 'application/octet-stream') return true
		}
	}
	return false
}

function pathToUniqueName(method, pathStr) {
	const segments = pathStr.split('/').filter(s => s && s !== '{id}')
	const pascal = segments.map(toPascalCase).join('')
	return `${method}${pascal}`
}

function dedup(action, R, resource) {
	if (action.toLowerCase().includes(resource.toLowerCase())) {
		return action
	}
	return `${action}${R}`
}

function makeFunctionName(method, pathStr, resource) {
	const R = toPascalCase(resource)
	const segments = pathStr.split('/').filter(Boolean)
	const rest = segments.slice(1)

	if (rest.length === 0) {
		if (method === 'get') return `query${R}`
		if (method === 'post') return `create${R}`
		return `${method}${R}`
	}

	const hasId = rest[0] === 'id' && rest[1] === '{id}'

	if (!hasId) {
		const action = toCamelCase(rest[0])
		if (action === 'count' && method === 'get') return `count${R}`
		return dedup(action, R, resource)
	}

	if (rest.length === 2) {
		if (method === 'get') return `get${R}ById`
		if (method === 'put') return `update${R}ById`
		if (method === 'delete') return `delete${R}ById`
		return `${method}${R}ById`
	}

	const actionParts = rest.slice(2).map(toCamelCase)
	const action = actionParts.join('')
	const base = dedup(action, R, resource)
	return `${base}ById`
}

function safeIdentifier(name, resource) {
	if (JS_RESERVED.has(name) || /^\d/.test(name)) {
		return `${toCamelCase(resource)}${toPascalCase(name)}`
	}
	return name
}

function buildFetchCall(urlExpr, method, hasBody, hasQuery, isBinary) {
	const upperMethod = method.toUpperCase()
	const urlPart = hasQuery ? `buildUrl(${urlExpr}, rest)` : urlExpr
	const optParts = []
	if (upperMethod !== 'GET') optParts.push(`method: '${upperMethod}'`)
	if (hasBody) optParts.push('body')
	if (isBinary) optParts.push('responseType: \'arraybuffer\'')
	const optStr = optParts.length > 0 ? `, {${optParts.join(', ')}}` : ''
	return `fetch(${urlPart}${optStr})`
}

function buildFunction(fnName, method, pathStr, hasId, hasBody, hasQuery, isBinary) {
	const params = ['fetch']
	if (hasId) params.push('id')
	if (hasBody) params.push('body')
	if (hasQuery) params.push('{...rest} = {}')
	const urlExpr = makeUrlExpr(pathStr)
	const fetchCall = buildFetchCall(urlExpr, method, hasBody, hasQuery, isBinary)
	return [
		`${TAB}async ${fnName}(${params.join(', ')}) {`,
		`${TAB}${TAB}return ${fetchCall}`,
		`${TAB}}`
	].join(CRLF)
}

function generateResourceFile(resource, fns) {
	const needsBuildUrl = fns.some(fn => fn.hasQuery)
	const fnStrings = fns.map((fn, i) => {
		const isLast = i === fns.length - 1
		return buildFunction(fn.fnName, fn.method, fn.path, fn.hasId, fn.hasBody, fn.hasQuery, fn.isBinary) +
			(isLast ? '' : ',')
	})

	const sections = [BANNER]
	if (needsBuildUrl) sections.push('const {buildUrl} = require(\'../../utils\')')
	sections.push('')
	sections.push('module.exports = {')
	sections.push('')
	sections.push(fnStrings.join(CRLF + CRLF))
	sections.push('}')
	sections.push('')
	return sections.join(CRLF)
}

function generateIndexFile(resourceNames) {
	const requireLines = resourceNames.map((r, i) =>
		i < resourceNames.length - 1
			? `${TAB}...require('./${r}'),`
			: `${TAB}...require('./${r}')`
	)
	const sections = [
		BANNER,
		'',
		'module.exports = {',
		...requireLines,
		'}',
		''
	]
	return sections.join(CRLF)
}

// ── Main ──────────────────────────────────────────────────────────────────────

const spec = yaml.load(fs.readFileSync(SPEC_PATH, 'utf8'))

// Group operations by resource tag
const resourceOps = new Map()

for (const [pathStr, pathItem] of Object.entries(spec.paths)) {
	const pathLevelParams = pathItem.parameters || []
	for (const [method, operation] of Object.entries(pathItem)) {
		if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue
		const tag = Array.isArray(operation.tags) && operation.tags[0]
		if (!tag) continue
		if (!resourceOps.has(tag)) resourceOps.set(tag, [])
		const allParams = [...pathLevelParams, ...(operation.parameters || [])]
		resourceOps.get(tag).push({method, path: pathStr, operation, allParams})
	}
}

// Build function descriptors per resource
const resourceFunctions = new Map()

for (const [resource, ops] of resourceOps) {
	const fns = ops.map(({method, path: pathStr, operation, allParams}) => {
		const hasId = pathStr.includes('/id/{id}')
		const hasBody = getHasBody(operation)
		const hasQuery = getHasQuery(spec, allParams)
		const isBinary = getIsBinary(operation)
		const rawName = makeFunctionName(method, pathStr, resource)
		const fnName = safeIdentifier(rawName, resource)
		return {fnName, method, path: pathStr, hasId, hasBody, hasQuery, isBinary}
	})

	// Sort by path then method for stable output
	fns.sort((a, b) => {
		if (a.path < b.path) return -1
		if (a.path > b.path) return 1
		if (a.method < b.method) return -1
		if (a.method > b.method) return 1
		return 0
	})

	// Resolve within-resource name collisions — first pass: method prefix
	const nameCounts = new Map()
	for (const fn of fns) {
		nameCounts.set(fn.fnName, (nameCounts.get(fn.fnName) || 0) + 1)
	}
	for (const fn of fns) {
		if (nameCounts.get(fn.fnName) > 1) {
			fn.fnName = `${fn.method}${toPascalCase(fn.fnName)}`
		}
	}

	// Second pass: if still colliding (same method on different paths), use full path
	const nameCounts2 = new Map()
	for (const fn of fns) {
		nameCounts2.set(fn.fnName, (nameCounts2.get(fn.fnName) || 0) + 1)
	}
	for (const fn of fns) {
		if (nameCounts2.get(fn.fnName) > 1) {
			fn.fnName = pathToUniqueName(fn.method, fn.path)
		}
	}

	// Final uniqueness check
	const nameSet = new Set()
	for (const fn of fns) {
		if (nameSet.has(fn.fnName)) {
			throw new Error(`Unresolvable name collision: '${fn.fnName}' in resource '${resource}'`)
		}
		nameSet.add(fn.fnName)
	}

	resourceFunctions.set(resource, fns)
}

// Global uniqueness check
const globalNames = new Set()
for (const [resource, fns] of resourceFunctions) {
	for (const fn of fns) {
		if (globalNames.has(fn.fnName)) {
			throw new Error(`Global name collision: '${fn.fnName}' (resource: ${resource})`)
		}
		globalNames.add(fn.fnName)
	}
}

// Write output files
if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR, {recursive: true})
}

const sortedResources = [...resourceFunctions.keys()].sort()

for (const resource of sortedResources) {
	const fns = resourceFunctions.get(resource)
	const content = generateResourceFile(resource, fns)
	fs.writeFileSync(path.join(OUTPUT_DIR, `${resource}.js`), content)
}

const indexContent = generateIndexFile(sortedResources)
fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), indexContent)

console.log(`Generated ${sortedResources.length} resource files + index.js in ${OUTPUT_DIR}`)
console.log(`Total functions: ${globalNames.size}`)
