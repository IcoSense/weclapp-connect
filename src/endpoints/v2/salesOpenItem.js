// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySalesOpenItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesOpenItem', rest))
	},

	async countSalesOpenItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesOpenItem/count', rest))
	},

	async getSalesOpenItemById(fetch, id) {
		return fetch(`salesOpenItem/id/${id}`)
	},

	async createPaymentApplicationSalesOpenItemById(fetch, id, body) {
		return fetch(`salesOpenItem/id/${id}/createPaymentApplication`, {method: 'POST', body})
	},

	async updatePaymentStateSalesOpenItemById(fetch, id, body) {
		return fetch(`salesOpenItem/id/${id}/updatePaymentState`, {method: 'POST', body})
	}
}
