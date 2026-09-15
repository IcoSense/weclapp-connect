// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketPriority(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketPriority', rest))
	},

	async createTicketPriority(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketPriority', rest), {method: 'POST', body})
	},

	async countTicketPriority(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketPriority/count', rest))
	},

	async deleteTicketPriorityById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketPriority/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketPriorityById(fetch, id) {
		return fetch(`ticketPriority/id/${id}`)
	},

	async updateTicketPriorityById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketPriority/id/${id}`, rest), {method: 'PUT', body})
	}
}
