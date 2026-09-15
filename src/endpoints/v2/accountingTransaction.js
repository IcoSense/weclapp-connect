// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryAccountingTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('accountingTransaction', rest))
	},

	async batchBookingAccountingTransaction(fetch, body) {
		return fetch('accountingTransaction/batchBooking', {method: 'POST', body})
	},

	async countAccountingTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('accountingTransaction/count', rest))
	},

	async getAccountingTransactionById(fetch, id) {
		return fetch(`accountingTransaction/id/${id}`)
	}
}
