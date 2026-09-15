// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketFaq(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketFaq', rest))
	},

	async createTicketFaq(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketFaq', rest), {method: 'POST', body})
	},

	async countTicketFaq(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketFaq/count', rest))
	},

	async deleteTicketFaqById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketFaq/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketFaqById(fetch, id) {
		return fetch(`ticketFaq/id/${id}`)
	},

	async updateTicketFaqById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketFaq/id/${id}`, rest), {method: 'PUT', body})
	}
}
