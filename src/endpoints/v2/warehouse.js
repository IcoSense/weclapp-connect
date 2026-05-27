// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWarehouse(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouse', rest))
	},

	async createWarehouse(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('warehouse', rest), {method: 'POST', body})
	},

	async countWarehouse(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouse/count', rest))
	},

	async deleteWarehouseById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`warehouse/id/${id}`, rest), {method: 'DELETE'})
	},

	async getWarehouseById(fetch, id) {
		return fetch(`warehouse/id/${id}`)
	},

	async updateWarehouseById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`warehouse/id/${id}`, rest), {method: 'PUT', body})
	},

	async activateWarehouseById(fetch, id, body) {
		return fetch(`warehouse/id/${id}/activate`, {method: 'POST', body})
	},

	async deactivateWarehouseById(fetch, id, body) {
		return fetch(`warehouse/id/${id}/deactivate`, {method: 'POST', body})
	}
}
