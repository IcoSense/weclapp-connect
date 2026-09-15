// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPersonRole(fetch, {...rest} = {}) {
		return fetch(buildUrl('personRole', rest))
	},

	async createPersonRole(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('personRole', rest), {method: 'POST', body})
	},

	async countPersonRole(fetch, {...rest} = {}) {
		return fetch(buildUrl('personRole/count', rest))
	},

	async deletePersonRoleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`personRole/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPersonRoleById(fetch, id) {
		return fetch(`personRole/id/${id}`)
	},

	async updatePersonRoleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`personRole/id/${id}`, rest), {method: 'PUT', body})
	}
}
