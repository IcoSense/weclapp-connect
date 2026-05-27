// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketStatus(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketStatus', rest))
	},

	async createTicketStatus(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketStatus', rest), {method: 'POST', body})
	},

	async countTicketStatus(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketStatus/count', rest))
	},

	async deleteTicketStatusById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketStatus/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketStatusById(fetch, id) {
		return fetch(`ticketStatus/id/${id}`)
	},

	async updateTicketStatusById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketStatus/id/${id}`, rest), {method: 'PUT', body})
	}
}
