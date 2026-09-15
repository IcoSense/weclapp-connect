// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketAssignmentRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketAssignmentRule', rest))
	},

	async createTicketAssignmentRule(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketAssignmentRule', rest), {method: 'POST', body})
	},

	async countTicketAssignmentRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketAssignmentRule/count', rest))
	},

	async deleteTicketAssignmentRuleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketAssignmentRule/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketAssignmentRuleById(fetch, id) {
		return fetch(`ticketAssignmentRule/id/${id}`)
	},

	async updateTicketAssignmentRuleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketAssignmentRule/id/${id}`, rest), {method: 'PUT', body})
	}
}
