// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPurchaseRequisition(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseRequisition', rest))
	},

	async countPurchaseRequisition(fetch, {...rest} = {}) {
		return fetch(buildUrl('purchaseRequisition/count', rest))
	},

	async deleteAllRequisitionsPurchaseRequisition(fetch, body) {
		return fetch('purchaseRequisition/deleteAllRequisitions', {method: 'POST', body})
	},

	async getPurchaseRequisitionById(fetch, id) {
		return fetch(`purchaseRequisition/id/${id}`)
	},

	async updatePurchaseRequisitionById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`purchaseRequisition/id/${id}`, rest), {method: 'PUT', body})
	},

	async addToInternalShipmentPurchaseRequisitionById(fetch, id, body) {
		return fetch(`purchaseRequisition/id/${id}/addToInternalShipment`, {method: 'POST', body})
	},

	async addToPurchaseOrderPurchaseRequisitionById(fetch, id, body) {
		return fetch(`purchaseRequisition/id/${id}/addToPurchaseOrder`, {method: 'POST', body})
	},

	async createProductionOrderPurchaseRequisitionById(fetch, id, body) {
		return fetch(`purchaseRequisition/id/${id}/createProductionOrder`, {method: 'POST', body})
	},

	async startMaterialPlanningRunPurchaseRequisition(fetch, body) {
		return fetch('purchaseRequisition/startMaterialPlanningRun', {method: 'POST', body})
	}
}
