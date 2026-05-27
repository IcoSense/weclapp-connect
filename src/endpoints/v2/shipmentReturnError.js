// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipmentReturnError(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnError', rest))
	},

	async createShipmentReturnError(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnError', rest), {method: 'POST', body})
	},

	async countShipmentReturnError(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnError/count', rest))
	},

	async deleteShipmentReturnErrorById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnError/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentReturnErrorById(fetch, id) {
		return fetch(`shipmentReturnError/id/${id}`)
	},

	async updateShipmentReturnErrorById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnError/id/${id}`, rest), {method: 'PUT', body})
	}
}
