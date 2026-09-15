'use strict'

const {expect} = require('chai')
const fixture = require('./fixtures/v2-method-names.json')

/*
 * The v2 surface is generated from apidoc/weclapp-openapi-v2.yaml. A regeneration against an
 * updated spec can rename or drop a method without anything in this repo failing to load --
 * the breakage first shows up as a TypeError at a consumer's call site. The fixture pins the
 * names that were present at the last reviewed regeneration.
 *
 * Missing name  -> failure, by name. Breaking change.
 * Added name    -> reported, not failed. Additive.
 *
 * To update after a deliberate regeneration: npm run update:v2-fixture
 * (see the howToUpdate field in the fixture before you do).
 */
describe('v2 method names', function () {
	let actual

	before(function () {
		const weclapp = require('../src/app')
		const client = weclapp({tenant: 'test', apikey: 'key123', apiVersion: 'v2'})

		// fetch is the raw escape hatch present on every client, not a generated endpoint
		actual = new Set(Object.keys(client).filter(name => name !== 'fetch'))
	})

	it('fixture records its own count', function () {
		expect(fixture.methods).to.have.lengthOf(fixture.methodCount)
	})

	it('client still has every recorded method', function () {
		const missing = fixture.methods.filter(name => !actual.has(name))
		const message = missing.length
			? `${missing.length} recorded v2 method(s) gone from the client: ${missing.join(', ')}`
			: ''

		expect(missing, message).to.be.an('array').that.is.empty
	})

	it('total count is the recorded count plus any additions', function () {
		const recorded = new Set(fixture.methods)
		const added = [...actual].filter(name => !recorded.has(name)).sort()

		if (added.length) {
			console.log(`      ${added.length} v2 method(s) added since the fixture was recorded:`)
			console.log(`      ${added.join(', ')}`)
			console.log('      additive -- run "npm run update:v2-fixture" to record them')
		}

		expect(actual.size).to.equal(fixture.methodCount + added.length)
	})
})
