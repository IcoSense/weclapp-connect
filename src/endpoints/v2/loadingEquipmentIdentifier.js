// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryLoadingEquipmentIdentifier(fetch, {...rest} = {}) {
		return fetch(buildUrl('loadingEquipmentIdentifier', rest))
	},

	async createLoadingEquipmentIdentifier(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('loadingEquipmentIdentifier', rest), {method: 'POST', body})
	},

	async countLoadingEquipmentIdentifier(fetch, {...rest} = {}) {
		return fetch(buildUrl('loadingEquipmentIdentifier/count', rest))
	},

	async deleteLoadingEquipmentIdentifierById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`loadingEquipmentIdentifier/id/${id}`, rest), {method: 'DELETE'})
	},

	async getLoadingEquipmentIdentifierById(fetch, id) {
		return fetch(`loadingEquipmentIdentifier/id/${id}`)
	},

	async updateLoadingEquipmentIdentifierById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`loadingEquipmentIdentifier/id/${id}`, rest), {method: 'PUT', body})
	}
}
