// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipment(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipment', rest))
	},

	async createShipment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipment', rest), {method: 'POST', body})
	},

	async countShipment(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipment/count', rest))
	},

	async deleteShipmentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentById(fetch, id) {
		return fetch(`shipment/id/${id}`)
	},

	async updateShipmentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipment/id/${id}`, rest), {method: 'PUT', body})
	},

	async createPickingListShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/createPickingList`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async createPickingOrderShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/createPickingOrder`, {method: 'POST', body})
	},

	async createReturnLabelsShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/createReturnLabels`, {method: 'POST', body})
	},

	async createSalesInvoiceShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/createSalesInvoice`, {method: 'POST', body})
	},

	async createShippingLabelPdfShipmentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipment/id/${id}/createShippingLabelPdf`, rest), {method: 'POST', body})
	},

	async createShippingLabelsShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/createShippingLabels`, {method: 'POST', body})
	},

	async downloadLatestDeliveryNotePdfShipmentById(fetch, id) {
		return fetch(`shipment/id/${id}/downloadLatestDeliveryNotePdf`, {responseType: 'arraybuffer'})
	},

	async downloadLatestPickingListPdfShipmentById(fetch, id) {
		return fetch(`shipment/id/${id}/downloadLatestPickingListPdf`, {responseType: 'arraybuffer'})
	},

	async downloadLatestShippingLabelPdfShipmentById(fetch, id) {
		return fetch(`shipment/id/${id}/downloadLatestShippingLabelPdf`, {responseType: 'arraybuffer'})
	},

	async printLabelShipmentById(fetch, id, body) {
		return fetch(`shipment/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	}
}
