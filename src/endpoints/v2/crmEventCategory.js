// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCrmEventCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmEventCategory', rest))
	},

	async createCrmEventCategory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('crmEventCategory', rest), {method: 'POST', body})
	},

	async countCrmEventCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmEventCategory/count', rest))
	},

	async deleteCrmEventCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`crmEventCategory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCrmEventCategoryById(fetch, id) {
		return fetch(`crmEventCategory/id/${id}`)
	},

	async updateCrmEventCategoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`crmEventCategory/id/${id}`, rest), {method: 'PUT', body})
	}
}
