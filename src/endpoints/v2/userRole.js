// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryUserRole(fetch, {...rest} = {}) {
		return fetch(buildUrl('userRole', rest))
	},

	async createUserRole(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('userRole', rest), {method: 'POST', body})
	},

	async countUserRole(fetch, {...rest} = {}) {
		return fetch(buildUrl('userRole/count', rest))
	},

	async disableUserRolesDuringTrial(fetch, body) {
		return fetch('userRole/disableUserRolesDuringTrial', {method: 'POST', body})
	},

	async enableUserRolesDuringTrial(fetch, body) {
		return fetch('userRole/enableUserRolesDuringTrial', {method: 'POST', body})
	},

	async deleteUserRoleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`userRole/id/${id}`, rest), {method: 'DELETE'})
	},

	async getUserRoleById(fetch, id) {
		return fetch(`userRole/id/${id}`)
	},

	async updateUserRoleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`userRole/id/${id}`, rest), {method: 'PUT', body})
	}
}
