// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPersonDepartment(fetch, {...rest} = {}) {
		return fetch(buildUrl('personDepartment', rest))
	},

	async createPersonDepartment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('personDepartment', rest), {method: 'POST', body})
	},

	async countPersonDepartment(fetch, {...rest} = {}) {
		return fetch(buildUrl('personDepartment/count', rest))
	},

	async deletePersonDepartmentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`personDepartment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPersonDepartmentById(fetch, id) {
		return fetch(`personDepartment/id/${id}`)
	},

	async updatePersonDepartmentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`personDepartment/id/${id}`, rest), {method: 'PUT', body})
	}
}
