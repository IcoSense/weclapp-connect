// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCrmCallCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmCallCategory', rest))
	},

	async createCrmCallCategory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('crmCallCategory', rest), {method: 'POST', body})
	},

	async countCrmCallCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmCallCategory/count', rest))
	},

	async deleteCrmCallCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`crmCallCategory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCrmCallCategoryById(fetch, id) {
		return fetch(`crmCallCategory/id/${id}`)
	},

	async updateCrmCallCategoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`crmCallCategory/id/${id}`, rest), {method: 'PUT', body})
	}
}
