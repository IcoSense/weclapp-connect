// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryInventoryGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryGroup', rest))
	},

	async countInventoryGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('inventoryGroup/count', rest))
	},

	async getInventoryGroupById(fetch, id) {
		return fetch(`inventoryGroup/id/${id}`)
	}
}
