// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipmentMethod(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentMethod', rest))
	},

	async createShipmentMethod(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipmentMethod', rest), {method: 'POST', body})
	},

	async countShipmentMethod(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentMethod/count', rest))
	},

	async deleteShipmentMethodById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipmentMethod/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentMethodById(fetch, id) {
		return fetch(`shipmentMethod/id/${id}`)
	},

	async updateShipmentMethodById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipmentMethod/id/${id}`, rest), {method: 'PUT', body})
	}
}
