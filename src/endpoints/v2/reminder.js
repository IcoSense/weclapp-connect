// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryReminder(fetch, {...rest} = {}) {
		return fetch(buildUrl('reminder', rest))
	},

	async createReminder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('reminder', rest), {method: 'POST', body})
	},

	async countReminder(fetch, {...rest} = {}) {
		return fetch(buildUrl('reminder/count', rest))
	},

	async deleteReminderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`reminder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getReminderById(fetch, id) {
		return fetch(`reminder/id/${id}`)
	},

	async updateReminderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`reminder/id/${id}`, rest), {method: 'PUT', body})
	}
}
