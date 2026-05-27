// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryProductionOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionOrder', rest))
	},

	async createProductionOrder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('productionOrder', rest), {method: 'POST', body})
	},

	async countProductionOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionOrder/count', rest))
	},

	async fastProductionBookingProductionOrder(fetch, body) {
		return fetch('productionOrder/fastProductionBooking', {method: 'POST', body})
	},

	async deleteProductionOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`productionOrder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getProductionOrderById(fetch, id) {
		return fetch(`productionOrder/id/${id}`)
	},

	async updateProductionOrderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`productionOrder/id/${id}`, rest), {method: 'PUT', body})
	},

	async createPickingListProductionOrderById(fetch, id, body) {
		return fetch(`productionOrder/id/${id}/createPickingList`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async createPickingOrderProductionOrderById(fetch, id, body) {
		return fetch(`productionOrder/id/${id}/createPickingOrder`, {method: 'POST', body})
	},

	async downloadLatestProductionOrderPdfById(fetch, id) {
		return fetch(`productionOrder/id/${id}/downloadLatestProductionOrderPdf`, {responseType: 'arraybuffer'})
	}
}
