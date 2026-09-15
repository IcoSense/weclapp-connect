// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryInventoryTransportReference(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryTransportReference', rest))
	},

	async createInventoryTransportReference(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('inventoryTransportReference', rest), {method: 'POST', body})
	},

	async countInventoryTransportReference(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryTransportReference/count', rest))
	},

	async getInventoryTransportReferenceById(fetch, id) {
		return fetch(`inventoryTransportReference/id/${id}`)
	},

	async updateInventoryTransportReferenceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`inventoryTransportReference/id/${id}`, rest), {method: 'PUT', body})
	}
}
