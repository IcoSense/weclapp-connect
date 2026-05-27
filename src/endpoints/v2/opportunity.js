// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryOpportunity(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunity', rest))
	},

	async createOpportunity(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('opportunity', rest), {method: 'POST', body})
	},

	async countOpportunity(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunity/count', rest))
	},

	async deleteOpportunityById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`opportunity/id/${id}`, rest), {method: 'DELETE'})
	},

	async getOpportunityById(fetch, id) {
		return fetch(`opportunity/id/${id}`)
	},

	async updateOpportunityById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`opportunity/id/${id}`, rest), {method: 'PUT', body})
	},

	async linkQuotationOpportunityById(fetch, id, body) {
		return fetch(`opportunity/id/${id}/linkQuotation`, {method: 'POST', body})
	}
}
