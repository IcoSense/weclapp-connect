// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySalesInvoice(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesInvoice', rest))
	},

	async createSalesInvoice(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('salesInvoice', rest), {method: 'POST', body})
	},

	async countSalesInvoice(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesInvoice/count', rest))
	},

	async deleteSalesInvoiceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`salesInvoice/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSalesInvoiceById(fetch, id) {
		return fetch(`salesInvoice/id/${id}`)
	},

	async updateSalesInvoiceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`salesInvoice/id/${id}`, rest), {method: 'PUT', body})
	},

	async addSalesOrdersSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/addSalesOrders`, {method: 'POST', body})
	},

	async calculateSalesPricesSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/calculateSalesPrices`, {method: 'POST', body})
	},

	async cancelSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/cancel`, {method: 'POST', body})
	},

	async createContractSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/createContract`, {method: 'POST', body})
	},

	async createCreditNoteSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/createCreditNote`, {method: 'POST', body})
	},

	async createCreditNoteOpenItemSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/createCreditNoteOpenItem`, {method: 'POST', body})
	},

	async downloadLatestSalesInvoicePdfById(fetch, id) {
		return fetch(`salesInvoice/id/${id}/downloadLatestSalesInvoicePdf`, {responseType: 'arraybuffer'})
	},

	async printLabelSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async recalculateCostsSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/recalculateCosts`, {method: 'POST', body})
	},

	async resetTaxesSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/resetTaxes`, {method: 'POST', body})
	},

	async setCostsForItemsWithoutCostSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/setCostsForItemsWithoutCost`, {method: 'POST', body})
	},

	async updatePricesSalesInvoiceById(fetch, id, body) {
		return fetch(`salesInvoice/id/${id}/updatePrices`, {method: 'POST', body})
	}
}
