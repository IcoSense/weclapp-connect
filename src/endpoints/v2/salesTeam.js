// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySalesTeam(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesTeam', rest))
	},

	async createSalesTeam(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('salesTeam', rest), {method: 'POST', body})
	},

	async countSalesTeam(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesTeam/count', rest))
	},

	async deleteSalesTeamById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`salesTeam/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSalesTeamById(fetch, id) {
		return fetch(`salesTeam/id/${id}`)
	},

	async updateSalesTeamById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`salesTeam/id/${id}`, rest), {method: 'PUT', body})
	}
}
