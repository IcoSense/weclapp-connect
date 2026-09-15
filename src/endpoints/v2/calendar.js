// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCalendar(fetch, {...rest} = {}) {
		return fetch(buildUrl('calendar', rest))
	},

	async createCalendar(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('calendar', rest), {method: 'POST', body})
	},

	async countCalendar(fetch, {...rest} = {}) {
		return fetch(buildUrl('calendar/count', rest))
	},

	async deleteCalendarById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`calendar/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCalendarById(fetch, id) {
		return fetch(`calendar/id/${id}`)
	},

	async updateCalendarById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`calendar/id/${id}`, rest), {method: 'PUT', body})
	},

	async deleteCalendarAndMoveEventsById(fetch, id, body) {
		return fetch(`calendar/id/${id}/deleteCalendarAndMoveEvents`, {method: 'POST', body})
	},

	async importiCalCalendarById(fetch, id, body) {
		return fetch(`calendar/id/${id}/importiCal`, {method: 'POST', body})
	}
}
