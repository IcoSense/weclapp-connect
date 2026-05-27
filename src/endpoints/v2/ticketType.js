// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketType(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketType', rest))
	},

	async createTicketType(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketType', rest), {method: 'POST', body})
	},

	async countTicketType(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketType/count', rest))
	},

	async deleteTicketTypeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketType/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketTypeById(fetch, id) {
		return fetch(`ticketType/id/${id}`)
	},

	async updateTicketTypeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketType/id/${id}`, rest), {method: 'PUT', body})
	}
}
