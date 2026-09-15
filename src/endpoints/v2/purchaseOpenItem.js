// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPurchaseOpenItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOpenItem', rest))
	},

	async countPurchaseOpenItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOpenItem/count', rest))
	},

	async getPurchaseOpenItemById(fetch, id) {
		return fetch(`purchaseOpenItem/id/${id}`)
	},

	async createPaymentApplicationPurchaseOpenItemById(fetch, id, body) {
		return fetch(`purchaseOpenItem/id/${id}/createPaymentApplication`, {method: 'POST', body})
	},

	async updatePaymentStatePurchaseOpenItemById(fetch, id, body) {
		return fetch(`purchaseOpenItem/id/${id}/updatePaymentState`, {method: 'POST', body})
	}
}
