// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCashAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccount', rest))
	},

	async createCashAccount(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('cashAccount', rest), {method: 'POST', body})
	},

	async countCashAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccount/count', rest))
	},

	async getCashAccountById(fetch, id) {
		return fetch(`cashAccount/id/${id}`)
	},

	async updateCashAccountById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`cashAccount/id/${id}`, rest), {method: 'PUT', body})
	}
}
