// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipmentReturnReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnReason', rest))
	},

	async createShipmentReturnReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnReason', rest), {method: 'POST', body})
	},

	async countShipmentReturnReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnReason/count', rest))
	},

	async deleteShipmentReturnReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentReturnReasonById(fetch, id) {
		return fetch(`shipmentReturnReason/id/${id}`)
	},

	async updateShipmentReturnReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
