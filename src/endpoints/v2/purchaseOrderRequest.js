// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPurchaseOrderRequest(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrderRequest', rest))
	},

	async createPurchaseOrderRequest(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrderRequest', rest), {method: 'POST', body})
	},

	async countPurchaseOrderRequest(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrderRequest/count', rest))
	},

	async deletePurchaseOrderRequestById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`purchaseOrderRequest/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPurchaseOrderRequestById(fetch, id) {
		return fetch(`purchaseOrderRequest/id/${id}`)
	},

	async updatePurchaseOrderRequestById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`purchaseOrderRequest/id/${id}`, rest), {method: 'PUT', body})
	},

	async createBlanketPurchaseOrderPurchaseOrderRequestById(fetch, id, body) {
		return fetch(`purchaseOrderRequest/id/${id}/createBlanketPurchaseOrder`, {method: 'POST', body})
	},

	async createPurchaseOrderPurchaseOrderRequestById(fetch, id, body) {
		return fetch(`purchaseOrderRequest/id/${id}/createPurchaseOrder`, {method: 'POST', body})
	},

	async exportItemsAsCsvPurchaseOrderRequestById(fetch, id, body) {
		return fetch(`purchaseOrderRequest/id/${id}/exportItemsAsCsv`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async pushPurchasePricesPurchaseOrderRequestById(fetch, id, body) {
		return fetch(`purchaseOrderRequest/id/${id}/pushPurchasePrices`, {method: 'POST', body})
	}
}
