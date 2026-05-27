// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryIncomingGoods(fetch, {...rest} = {}) {
		return fetch(buildUrl('incomingGoods', rest))
	},

	async createIncomingGoods(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('incomingGoods', rest), {method: 'POST', body})
	},

	async countIncomingGoods(fetch, {...rest} = {}) {
		return fetch(buildUrl('incomingGoods/count', rest))
	},

	async deleteIncomingGoodsById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`incomingGoods/id/${id}`, rest), {method: 'DELETE'})
	},

	async getIncomingGoodsById(fetch, id) {
		return fetch(`incomingGoods/id/${id}`)
	},

	async updateIncomingGoodsById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`incomingGoods/id/${id}`, rest), {method: 'PUT', body})
	},

	async addPurchaseOrdersIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/addPurchaseOrders`, {method: 'POST', body})
	},

	async createCompensationShipmentIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/createCompensationShipment`, {method: 'POST', body})
	},

	async createCreditNoteIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/createCreditNote`, {method: 'POST', body})
	},

	async createPurchaseInvoiceIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/createPurchaseInvoice`, {method: 'POST', body})
	},

	async createReturnLabelsIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/createReturnLabels`, {method: 'POST', body})
	},

	async createSupplierReturnIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/createSupplierReturn`, {method: 'POST', body})
	},

	async incomingBookingsIncomingGoodsById(fetch, id) {
		return fetch(`incomingGoods/id/${id}/incomingBookings`)
	},

	async updateIncomingBookingsIncomingGoodsById(fetch, id, body) {
		return fetch(`incomingGoods/id/${id}/updateIncomingBookings`, {method: 'POST', body})
	}
}
