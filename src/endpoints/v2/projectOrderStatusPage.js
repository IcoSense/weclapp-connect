// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryProjectOrderStatusPage(fetch, {...rest} = {}) {
		return fetch(buildUrl('projectOrderStatusPage', rest))
	},

	async createProjectOrderStatusPage(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('projectOrderStatusPage', rest), {method: 'POST', body})
	},

	async countProjectOrderStatusPage(fetch, {...rest} = {}) {
		return fetch(buildUrl('projectOrderStatusPage/count', rest))
	},

	async deleteProjectOrderStatusPageById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`projectOrderStatusPage/id/${id}`, rest), {method: 'DELETE'})
	},

	async getProjectOrderStatusPageById(fetch, id) {
		return fetch(`projectOrderStatusPage/id/${id}`)
	},

	async updateProjectOrderStatusPageById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`projectOrderStatusPage/id/${id}`, rest), {method: 'PUT', body})
	}
}
