// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTax(fetch, {...rest} = {}) {
		return fetch(buildUrl('tax', rest))
	},

	async createTax(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('tax', rest), {method: 'POST', body})
	},

	async configurePurchaseTaxes(fetch, body) {
		return fetch('tax/configurePurchaseTaxes', {method: 'POST', body})
	},

	async configureSalesTaxes(fetch, body) {
		return fetch('tax/configureSalesTaxes', {method: 'POST', body})
	},

	async countTax(fetch, {...rest} = {}) {
		return fetch(buildUrl('tax/count', rest))
	},

	async findPurchaseTax(fetch, {...rest} = {}) {
		return fetch(buildUrl('tax/findPurchaseTax', rest))
	},

	async findSalesTax(fetch, {...rest} = {}) {
		return fetch(buildUrl('tax/findSalesTax', rest))
	},

	async deleteTaxById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`tax/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTaxById(fetch, id) {
		return fetch(`tax/id/${id}`)
	},

	async updateTaxById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`tax/id/${id}`, rest), {method: 'PUT', body})
	},

	async resetSystemTaxes(fetch, body) {
		return fetch('tax/resetSystemTaxes', {method: 'POST', body})
	}
}
