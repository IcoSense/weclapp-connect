// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPurchaseInvoice(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseInvoice', rest))
	},

	async createPurchaseInvoice(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('purchaseInvoice', rest), {method: 'POST', body})
	},

	async countPurchaseInvoice(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseInvoice/count', rest))
	},

	async deletePurchaseInvoiceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`purchaseInvoice/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPurchaseInvoiceById(fetch, id) {
		return fetch(`purchaseInvoice/id/${id}`)
	},

	async updatePurchaseInvoiceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`purchaseInvoice/id/${id}`, rest), {method: 'PUT', body})
	},

	async cancelPurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/cancel`, {method: 'POST', body})
	},

	async convertPurchaseInvoiceToCreditNoteById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/convertPurchaseInvoiceToCreditNote`, {method: 'POST', body})
	},

	async createContractPurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/createContract`, {method: 'POST', body})
	},

	async createCreditNotePurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/createCreditNote`, {method: 'POST', body})
	},

	async downloadLatestPurchaseInvoiceDocumentById(fetch, id) {
		return fetch(`purchaseInvoice/id/${id}/downloadLatestPurchaseInvoiceDocument`, {responseType: 'arraybuffer'})
	},

	async printLabelPurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async resetTaxesPurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/resetTaxes`, {method: 'POST', body})
	},

	async saveDuplicateInvoiceAsOriginalPurchaseInvoiceById(fetch, id, body) {
		return fetch(`purchaseInvoice/id/${id}/saveDuplicateInvoiceAsOriginal`, {method: 'POST', body})
	},

	async startInvoiceDocumentProcessingPurchaseInvoice(fetch, body) {
		return fetch('purchaseInvoice/startInvoiceDocumentProcessing/multipartUpload', {method: 'POST', body})
	}
}
