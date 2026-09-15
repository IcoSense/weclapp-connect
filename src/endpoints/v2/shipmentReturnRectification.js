// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipmentReturnRectification(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnRectification', rest))
	},

	async createShipmentReturnRectification(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnRectification', rest), {method: 'POST', body})
	},

	async countShipmentReturnRectification(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnRectification/count', rest))
	},

	async deleteShipmentReturnRectificationById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnRectification/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentReturnRectificationById(fetch, id) {
		return fetch(`shipmentReturnRectification/id/${id}`)
	},

	async updateShipmentReturnRectificationById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnRectification/id/${id}`, rest), {method: 'PUT', body})
	}
}
