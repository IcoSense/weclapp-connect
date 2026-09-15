// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryQuotation(fetch, {...rest} = {}) {
		return fetch(buildUrl('quotation', rest))
	},

	async createQuotation(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('quotation', rest), {method: 'POST', body})
	},

	async countQuotation(fetch, {...rest} = {}) {
		return fetch(buildUrl('quotation/count', rest))
	},

	async deleteQuotationById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`quotation/id/${id}`, rest), {method: 'DELETE'})
	},

	async getQuotationById(fetch, id) {
		return fetch(`quotation/id/${id}`)
	},

	async updateQuotationById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`quotation/id/${id}`, rest), {method: 'PUT', body})
	},

	async acceptQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/accept`, {method: 'POST', body})
	},

	async addDefaultScalePricesToItemsQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/addDefaultScalePricesToItems`, {method: 'POST', body})
	},

	async calculateSalesPricesQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/calculateSalesPrices`, {method: 'POST', body})
	},

	async createNewVersionQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/createNewVersion`, {method: 'POST', body})
	},

	async createPublicPageLinkQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/createPublicPageLink`, {method: 'POST', body})
	},

	async createPurchaseOrderRequestQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/createPurchaseOrderRequest`, {method: 'POST', body})
	},

	async createQuotationPdfById(fetch, id, body) {
		return fetch(`quotation/id/${id}/createQuotationPdf`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async disablePublicPageLinkQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/disablePublicPageLink`, {method: 'POST', body})
	},

	async downloadLatestQuotationPdfById(fetch, id) {
		return fetch(`quotation/id/${id}/downloadLatestQuotationPdf`, {responseType: 'arraybuffer'})
	},

	async inquireQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/inquire`, {method: 'POST', body})
	},

	async printLabelQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async printQuotationDataById(fetch, id) {
		return fetch(`quotation/id/${id}/printQuotationData`, {responseType: 'arraybuffer'})
	},

	async recalculateCostsQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/recalculateCosts`, {method: 'POST', body})
	},

	async resetTaxesQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/resetTaxes`, {method: 'POST', body})
	},

	async setCostsForItemsWithoutCostQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/setCostsForItemsWithoutCost`, {method: 'POST', body})
	},

	async updatePricesQuotationById(fetch, id, body) {
		return fetch(`quotation/id/${id}/updatePrices`, {method: 'POST', body})
	}
}
