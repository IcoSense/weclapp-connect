// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketChannel(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketChannel', rest))
	},

	async createTicketChannel(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketChannel', rest), {method: 'POST', body})
	},

	async countTicketChannel(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketChannel/count', rest))
	},

	async deleteTicketChannelById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketChannel/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketChannelById(fetch, id) {
		return fetch(`ticketChannel/id/${id}`)
	},

	async updateTicketChannelById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketChannel/id/${id}`, rest), {method: 'PUT', body})
	}
}
