// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryBlanketPurchaseOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('blanketPurchaseOrder', rest))
	},

	async createBlanketPurchaseOrder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('blanketPurchaseOrder', rest), {method: 'POST', body})
	},

	async countBlanketPurchaseOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('blanketPurchaseOrder/count', rest))
	},

	async deleteBlanketPurchaseOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`blanketPurchaseOrder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getBlanketPurchaseOrderById(fetch, id) {
		return fetch(`blanketPurchaseOrder/id/${id}`)
	},

	async updateBlanketPurchaseOrderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`blanketPurchaseOrder/id/${id}`, rest), {method: 'PUT', body})
	},

	async downloadLatestBlanketPurchaseOrderPdfById(fetch, id) {
		return fetch(`blanketPurchaseOrder/id/${id}/downloadLatestBlanketPurchaseOrderPdf`, {responseType: 'arraybuffer'})
	},

	async generateReleasesBlanketPurchaseOrderById(fetch, id, body) {
		return fetch(`blanketPurchaseOrder/id/${id}/generateReleases`, {method: 'POST', body})
	}
}
