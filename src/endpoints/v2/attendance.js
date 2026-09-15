// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryAttendance(fetch, {...rest} = {}) {
		return fetch(buildUrl('attendance', rest))
	},

	async createAttendance(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('attendance', rest), {method: 'POST', body})
	},

	async countAttendance(fetch, {...rest} = {}) {
		return fetch(buildUrl('attendance/count', rest))
	},

	async currentAttendance(fetch) {
		return fetch('attendance/currentAttendance')
	},

	async deleteAttendanceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`attendance/id/${id}`, rest), {method: 'DELETE'})
	},

	async getAttendanceById(fetch, id) {
		return fetch(`attendance/id/${id}`)
	},

	async updateAttendanceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`attendance/id/${id}`, rest), {method: 'PUT', body})
	},

	async logOffAttendance(fetch, body) {
		return fetch('attendance/logOff', {method: 'POST', body})
	},

	async logOnAttendance(fetch, body) {
		return fetch('attendance/logOn', {method: 'POST', body})
	}
}
