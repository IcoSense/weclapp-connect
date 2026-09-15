// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTimeRecord(fetch, {...rest} = {}) {
		return fetch(buildUrl('timeRecord', rest))
	},

	async createTimeRecord(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('timeRecord', rest), {method: 'POST', body})
	},

	async countTimeRecord(fetch, {...rest} = {}) {
		return fetch(buildUrl('timeRecord/count', rest))
	},

	async deleteTimeRecordById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`timeRecord/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTimeRecordById(fetch, id) {
		return fetch(`timeRecord/id/${id}`)
	},

	async updateTimeRecordById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`timeRecord/id/${id}`, rest), {method: 'PUT', body})
	}
}
