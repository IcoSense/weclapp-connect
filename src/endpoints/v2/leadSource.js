// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryLeadSource(fetch, {...rest} = {}) {
		return fetch(buildUrl('leadSource', rest))
	},

	async createLeadSource(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('leadSource', rest), {method: 'POST', body})
	},

	async countLeadSource(fetch, {...rest} = {}) {
		return fetch(buildUrl('leadSource/count', rest))
	},

	async deleteLeadSourceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`leadSource/id/${id}`, rest), {method: 'DELETE'})
	},

	async getLeadSourceById(fetch, id) {
		return fetch(`leadSource/id/${id}`)
	},

	async updateLeadSourceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`leadSource/id/${id}`, rest), {method: 'PUT', body})
	}
}
