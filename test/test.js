'use strict'

const {expect} = require('chai')
const weclapp = require('../src/app')

const tenant = process.env.WECLAPP_TENANT
const apikey = process.env.WECLAPP_APIKEY

describe('smoke (requires WECLAPP_TENANT + WECLAPP_APIKEY)', function () {
	let v1
	let v2

	before(function () {
		if (!tenant || !apikey) return this.skip()
		v1 = weclapp({tenant, apikey})
		v2 = weclapp({tenant, apikey, apiVersion: 'v2'})
	})

	it('v1 getUsers returns result array', async function () {
		const res = await v1.getUsers({pageSize: 1})
		expect(res).to.be.an('object')
		expect(res.result).to.be.an('array')
	})

	it('v2 countParty returns count object', async function () {
		const res = await v2.countParty()
		expect(res).to.be.an('object')
	})
})
