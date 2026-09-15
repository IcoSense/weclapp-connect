// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPurchaseOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrder', rest))
	},

	async createPurchaseOrder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrder', rest), {method: 'POST', body})
	},

	async countPurchaseOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseOrder/count', rest))
	},

	async deletePurchaseOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`purchaseOrder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPurchaseOrderById(fetch, id) {
		return fetch(`purchaseOrder/id/${id}`)
	},

	async updatePurchaseOrderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`purchaseOrder/id/${id}`, rest), {method: 'PUT', body})
	},

	async cancelDropshippingShipmentsPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/cancelDropshippingShipments`, {method: 'POST', body})
	},

	async createCancellationSlipPdfPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createCancellationSlipPdf`, {method: 'POST', body})
	},

	async createContractPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createContract`, {method: 'POST', body})
	},

	async createDropshippingDeliveryNotePdfPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createDropshippingDeliveryNotePdf`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async createIncomingGoodsPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createIncomingGoods`, {method: 'POST', body})
	},

	async createProductionOrdersPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createProductionOrders`, {method: 'POST', body})
	},

	async createPurchaseInvoicePurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createPurchaseInvoice`, {method: 'POST', body})
	},

	async createSupplierReturnPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/createSupplierReturn`, {method: 'POST', body})
	},

	async downloadLatestCancellationSlipPdfPurchaseOrderById(fetch, id) {
		return fetch(`purchaseOrder/id/${id}/downloadLatestCancellationSlipPdf`, {responseType: 'arraybuffer'})
	},

	async downloadLatestDropshippingDeliveryNotePdfPurchaseOrderById(fetch, id) {
		return fetch(`purchaseOrder/id/${id}/downloadLatestDropshippingDeliveryNotePdf`, {responseType: 'arraybuffer'})
	},

	async downloadLatestPurchaseOrderPdfById(fetch, id) {
		return fetch(`purchaseOrder/id/${id}/downloadLatestPurchaseOrderPdf`, {responseType: 'arraybuffer'})
	},

	async manuallyClosePurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/manuallyClose`, {method: 'POST', body})
	},

	async printLabelPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async processDropshippingPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/processDropshipping`, {method: 'POST', body})
	},

	async resetTaxesPurchaseOrderById(fetch, id, body) {
		return fetch(`purchaseOrder/id/${id}/resetTaxes`, {method: 'POST', body})
	}
}
