// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCustomAttributeDefinition(fetch, {...rest} = {}) {
		return fetch(buildUrl('customAttributeDefinition', rest))
	},

	async createCustomAttributeDefinition(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('customAttributeDefinition', rest), {method: 'POST', body})
	},

	async countCustomAttributeDefinition(fetch, {...rest} = {}) {
		return fetch(buildUrl('customAttributeDefinition/count', rest))
	},

	async deleteCustomAttributeDefinitionById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`customAttributeDefinition/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCustomAttributeDefinitionById(fetch, id) {
		return fetch(`customAttributeDefinition/id/${id}`)
	},

	async updateCustomAttributeDefinitionById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`customAttributeDefinition/id/${id}`, rest), {method: 'PUT', body})
	},

	async readOrderCustomAttributeDefinition(fetch, {...rest} = {}) {
		return fetch(buildUrl('customAttributeDefinition/readOrder', rest))
	},

	async updateOrderCustomAttributeDefinition(fetch, body) {
		return fetch('customAttributeDefinition/updateOrder', {method: 'POST', body})
	}
}
