// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCalendarEvent(fetch, {...rest} = {}) {
		return fetch(buildUrl('calendarEvent', rest))
	},

	async createCalendarEvent(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('calendarEvent', rest), {method: 'POST', body})
	},

	async countCalendarEvent(fetch, {...rest} = {}) {
		return fetch(buildUrl('calendarEvent/count', rest))
	},

	async deleteCalendarEventById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`calendarEvent/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCalendarEventById(fetch, id) {
		return fetch(`calendarEvent/id/${id}`)
	},

	async updateCalendarEventById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`calendarEvent/id/${id}`, rest), {method: 'PUT', body})
	}
}
