// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryInventory(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventory', rest))
	},

	async postInventory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('inventory', rest), {method: 'POST', body})
	},

	async countInventory(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventory/count', rest))
	},

	async postInventoryCreate(fetch, body) {
		return fetch('inventory/create', {method: 'POST', body})
	},

	async deleteInventoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`inventory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getInventoryById(fetch, id) {
		return fetch(`inventory/id/${id}`)
	},

	async updateInventoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`inventory/id/${id}`, rest), {method: 'PUT', body})
	},

	async bookInventoryById(fetch, id, body) {
		return fetch(`inventory/id/${id}/bookInventory`, {method: 'POST', body})
	}
}
