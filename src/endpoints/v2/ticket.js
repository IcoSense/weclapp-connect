// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicket(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticket', rest))
	},

	async createTicket(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ticket', rest), {method: 'POST', body})
	},

	async countTicket(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticket/count', rest))
	},

	async deleteTicketById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ticket/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTicketById(fetch, id) {
		return fetch(`ticket/id/${id}`)
	},

	async updateTicketById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ticket/id/${id}`, rest), {method: 'PUT', body})
	},

	async createPerformanceRecordTicketById(fetch, id, body) {
		return fetch(`ticket/id/${id}/createPerformanceRecord`, {method: 'POST', body})
	},

	async createPublicPageTicketById(fetch, id, body) {
		return fetch(`ticket/id/${id}/createPublicPage`, {method: 'POST', body})
	},

	async disablePublicPageTicketById(fetch, id, body) {
		return fetch(`ticket/id/${id}/disablePublicPage`, {method: 'POST', body})
	},

	async linkSalesOrderTicketById(fetch, id, body) {
		return fetch(`ticket/id/${id}/linkSalesOrder`, {method: 'POST', body})
	},

	async unlinkSalesOrderTicketById(fetch, id, body) {
		return fetch(`ticket/id/${id}/unlinkSalesOrder`, {method: 'POST', body})
	}
}
