// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySalesOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesOrder', rest))
	},

	async createSalesOrder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('salesOrder', rest), {method: 'POST', body})
	},

	async countSalesOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesOrder/count', rest))
	},

	async defaultValuesForCreateSalesOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesOrder/defaultValuesForCreate', rest))
	},

	async deleteSalesOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`salesOrder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSalesOrderById(fetch, id) {
		return fetch(`salesOrder/id/${id}`)
	},

	async updateSalesOrderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`salesOrder/id/${id}`, rest), {method: 'PUT', body})
	},

	async activateProjectViewSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/activateProjectView`, {method: 'POST', body})
	},

	async calculateSalesPricesSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/calculateSalesPrices`, {method: 'POST', body})
	},

	async cancelOrManuallyCloseSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/cancelOrManuallyClose`, {method: 'POST', body})
	},

	async createAdvancePaymentRequestSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createAdvancePaymentRequest`, {method: 'POST', body})
	},

	async createContractSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createContract`, {method: 'POST', body})
	},

	async createCustomerReturnSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createCustomerReturn`, {method: 'POST', body})
	},

	async createDropshippingSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createDropshipping`, {method: 'POST', body})
	},

	async createPartPaymentInvoiceSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createPartPaymentInvoice`, {method: 'POST', body})
	},

	async createPerformanceRecordSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createPerformanceRecord`, {method: 'POST', body})
	},

	async createPrepaymentFinalInvoiceSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createPrepaymentFinalInvoice`, {method: 'POST', body})
	},

	async createProductionOrdersSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createProductionOrders`, {method: 'POST', body})
	},

	async createPurchaseOrderSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createPurchaseOrder`, {method: 'POST', body})
	},

	async createPurchaseOrderRequestSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createPurchaseOrderRequest`, {method: 'POST', body})
	},

	async createReturnLabelsSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createReturnLabels`, {method: 'POST', body})
	},

	async createSalesInvoiceSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createSalesInvoice`, {method: 'POST', body})
	},

	async createShipmentSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createShipment`, {method: 'POST', body})
	},

	async createShippingLabelsSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/createShippingLabels`, {method: 'POST', body})
	},

	async downloadLatestOrderConfirmationPdfSalesOrderById(fetch, id) {
		return fetch(`salesOrder/id/${id}/downloadLatestOrderConfirmationPdf`, {responseType: 'arraybuffer'})
	},

	async manuallyCloseSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/manuallyClose`, {method: 'POST', body})
	},

	async previewSalesOrderConfirmationById(fetch, id) {
		return fetch(`salesOrder/id/${id}/previewSalesOrderConfirmation`, {responseType: 'arraybuffer'})
	},

	async printLabelSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/printLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async printOrderDataSalesOrderById(fetch, id) {
		return fetch(`salesOrder/id/${id}/printOrderData`, {responseType: 'arraybuffer'})
	},

	async recalculateCostsSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/recalculateCosts`, {method: 'POST', body})
	},

	async resetTaxesSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/resetTaxes`, {method: 'POST', body})
	},

	async setCostsForItemsWithoutCostSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/setCostsForItemsWithoutCost`, {method: 'POST', body})
	},

	async shipOrderForExternalFulfillmentSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/shipOrderForExternalFulfillment`, {method: 'POST', body})
	},

	async toggleProjectTeamSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/toggleProjectTeam`, {method: 'POST', body})
	},

	async toggleServicesFinishedSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/toggleServicesFinished`, {method: 'POST', body})
	},

	async updatePricesSalesOrderById(fetch, id, body) {
		return fetch(`salesOrder/id/${id}/updatePrices`, {method: 'POST', body})
	}
}
