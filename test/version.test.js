'use strict'

const Module = require('module')
const {expect} = require('chai')

let weclapp
let lastConfig = null

before(function () {
	const original = Module._load
	Module._load = function (req, parent, isMain) {
		if (req === 'axios') {
			return function mockAxios(cfg) {
				lastConfig = cfg
				return Promise.resolve({status: 200, data: {}})
			}
		}
		return original.call(this, req, parent, isMain)
	}

	// Flush cached modules so app.js re-requires the mocked axios
	for (const key of Object.keys(require.cache)) {
		if (key.includes(`${require('path').sep}src${require('path').sep}`) ||
			key.includes('/src/')) {
			delete require.cache[key]
		}
	}

	weclapp = require('../src/app')
	Module._load = original
})

const AUTH = {tenant: 'test', apikey: 'key123'}

describe('version routing', function () {
	it('defaults to v1 URL', async function () {
		const c = weclapp(AUTH)
		await c.getUsers({pageSize: 1})
		expect(lastConfig.url).to.include('/webapp/api/v1/')
	})

	it('explicit v1 uses v1 URL', async function () {
		const c = weclapp({...AUTH, apiVersion: 'v1'})
		await c.getUsers({pageSize: 1})
		expect(lastConfig.url).to.include('/webapp/api/v1/')
	})

	it('v2 string uses v2 URL', async function () {
		const c = weclapp({...AUTH, apiVersion: 'v2'})
		await c.getPartyById('abc')
		expect(lastConfig.url).to.include('/webapp/api/v2/')
	})

	it('v2 integer uses v2 URL', async function () {
		const c = weclapp({...AUTH, apiVersion: 2})
		await c.getPartyById('abc')
		expect(lastConfig.url).to.include('/webapp/api/v2/')
	})

	it('v2 string-number uses v2 URL', async function () {
		const c = weclapp({...AUTH, apiVersion: '2'})
		await c.getPartyById('abc')
		expect(lastConfig.url).to.include('/webapp/api/v2/')
	})

	it('throws on unsupported version', function () {
		expect(() => weclapp({...AUTH, apiVersion: 'v3'})).to.throw()
	})
})

describe('endpoint surface', function () {
	it('v1 instance has getCustomers', function () {
		const c = weclapp(AUTH)
		expect(typeof c.getCustomers).to.equal('function')
	})

	it('v2 instance has getPartyById', function () {
		const c = weclapp({...AUTH, apiVersion: 'v2'})
		expect(typeof c.getPartyById).to.equal('function')
	})

	it('v2 instance has createParty', function () {
		const c = weclapp({...AUTH, apiVersion: 'v2'})
		expect(typeof c.createParty).to.equal('function')
	})

	it('v2 instance does not have getCustomers', function () {
		const c = weclapp({...AUTH, apiVersion: 'v2'})
		expect(c.getCustomers).to.be.undefined
	})
})

describe('binary responses', function () {
	it('downloadImagePartyById sets responseType arraybuffer', async function () {
		const c = weclapp({...AUTH, apiVersion: 'v2'})
		await c.downloadImagePartyById('abc')
		expect(lastConfig.responseType).to.equal('arraybuffer')
	})
})
