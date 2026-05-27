// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWorkScheduleProfile(fetch, {...rest} = {}) {
		return fetch(buildUrl('workScheduleProfile', rest))
	},

	async createWorkScheduleProfile(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('workScheduleProfile', rest), {method: 'POST', body})
	},

	async countWorkScheduleProfile(fetch, {...rest} = {}) {
		return fetch(buildUrl('workScheduleProfile/count', rest))
	},

	async deleteWorkScheduleProfileById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`workScheduleProfile/id/${id}`, rest), {method: 'DELETE'})
	},

	async getWorkScheduleProfileById(fetch, id) {
		return fetch(`workScheduleProfile/id/${id}`)
	},

	async updateWorkScheduleProfileById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`workScheduleProfile/id/${id}`, rest), {method: 'PUT', body})
	}
}
