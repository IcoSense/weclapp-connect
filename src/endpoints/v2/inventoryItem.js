// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryInventoryItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryItem', rest))
	},

	async createInventoryItem(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('inventoryItem', rest), {method: 'POST', body})
	},

	async countInventoryItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryItem/count', rest))
	},

	async deleteInventoryItemById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`inventoryItem/id/${id}`, rest), {method: 'DELETE'})
	},

	async getInventoryItemById(fetch, id) {
		return fetch(`inventoryItem/id/${id}`)
	},

	async updateInventoryItemById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`inventoryItem/id/${id}`, rest), {method: 'PUT', body})
	}
}
