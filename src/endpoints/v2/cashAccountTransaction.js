// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCashAccountTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccountTransaction', rest))
	},

	async createCashAccountTransaction(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('cashAccountTransaction', rest), {method: 'POST', body})
	},

	async countCashAccountTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccountTransaction/count', rest))
	},

	async deleteCashAccountTransactionById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`cashAccountTransaction/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCashAccountTransactionById(fetch, id) {
		return fetch(`cashAccountTransaction/id/${id}`)
	}
}
