// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketServiceLevelAgreement(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketServiceLevelAgreement', rest))
	},

	async createTicketServiceLevelAgreement(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticketServiceLevelAgreement', rest), {method: 'POST', body})
	},

	async countTicketServiceLevelAgreement(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketServiceLevelAgreement/count', rest))
	},

	async deleteTicketServiceLevelAgreementById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticketServiceLevelAgreement/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketServiceLevelAgreementById(fetch, id) {
		return fetch(`ticketServiceLevelAgreement/id/${id}`)
	},

	async updateTicketServiceLevelAgreementById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticketServiceLevelAgreement/id/${id}`, rest), {method: 'PUT', body})
	}
}
