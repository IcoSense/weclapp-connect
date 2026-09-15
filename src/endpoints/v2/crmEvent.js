// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCrmEvent(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmEvent', rest))
	},

	async createCrmEvent(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('crmEvent', rest), {method: 'POST', body})
	},

	async countCrmEvent(fetch, {...rest} = {}) {
		return fetch(buildUrl('crmEvent/count', rest))
	},

	async deleteCrmEventById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`crmEvent/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCrmEventById(fetch, id) {
		return fetch(`crmEvent/id/${id}`)
	},

	async updateCrmEventById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`crmEvent/id/${id}`, rest), {method: 'PUT', body})
	}
}
