// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketCategory', rest))
	},

	async createTicketCategory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketCategory', rest), {method: 'POST', body})
	},

	async countTicketCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketCategory/count', rest))
	},

	async deleteTicketCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketCategory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketCategoryById(fetch, id) {
		return fetch(`ticketCategory/id/${id}`)
	},

	async updateTicketCategoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketCategory/id/${id}`, rest), {method: 'PUT', body})
	}
}
