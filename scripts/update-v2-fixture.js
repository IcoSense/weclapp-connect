'use strict'

/*
 * Records the generated v2 method names as a test fixture.
 *
 * Run this only after a deliberate regeneration of src/endpoints/v2 (npm run generate:v2),
 * and only once the diff of that regeneration has been reviewed. Recording the fixture is what
 * turns a silent rename or removal into a reviewed one.
 */

const fs = require('fs')
const path = require('path')

const endpoints = require('../src/endpoints/v2')
const FIXTURE_PATH = path.join(__dirname, '..', 'test', 'fixtures', 'v2-method-names.json')

const methods = Object.keys(endpoints).sort()

const fixture = {
	note: [
		'Generated v2 method names, as of the last reviewed regeneration of src/endpoints/v2.',
		'test/v2-method-names.test.js fails when one of these is missing from a v2 client.',
		'That is what a regeneration silently renaming or dropping an endpoint looks like, and',
		'it would otherwise surface as a TypeError in a consumer at runtime. Added names are',
		'reported, not failed -- they are additive.'
	].join(' '),
	howToUpdate: [
		'Regenerate with "npm run generate:v2", review the src/endpoints/v2 diff, then run',
		'"npm run update:v2-fixture" and commit the fixture in the same change. Never record',
		'the fixture just to turn a red test green: a name that disappeared is a breaking',
		'change for every call site using it.'
	].join(' '),
	generatedFrom: 'src/endpoints/v2, generated from apidoc/weclapp-openapi-v2.yaml by scripts/generate-v2.js',
	excludes: 'fetch -- the raw request escape hatch on every client, not a generated endpoint method',
	methodCount: methods.length,
	methods
}

fs.mkdirSync(path.dirname(FIXTURE_PATH), {recursive: true})
fs.writeFileSync(FIXTURE_PATH, `${JSON.stringify(fixture, null, '\t')}\n`)

console.log(`Recorded ${methods.length} v2 method names in ${FIXTURE_PATH}`)
