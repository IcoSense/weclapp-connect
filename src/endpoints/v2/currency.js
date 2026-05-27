// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCurrency(fetch, {...rest} = {}) {
		return fetch(buildUrl('currency', rest))
	},

	async createCurrency(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('currency', rest), {method: 'POST', body})
	},

	async companyCurrency(fetch) {
		return fetch('currency/companyCurrency')
	},

	async countCurrency(fetch, {...rest} = {}) {
		return fetch(buildUrl('currency/count', rest))
	},

	async deleteCurrencyById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`currency/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCurrencyById(fetch, id) {
		return fetch(`currency/id/${id}`)
	},

	async updateCurrencyById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`currency/id/${id}`, rest), {method: 'PUT', body})
	}
}
