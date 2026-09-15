// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryOpportunityWinLossReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunityWinLossReason', rest))
	},

	async createOpportunityWinLossReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('opportunityWinLossReason', rest), {method: 'POST', body})
	},

	async countOpportunityWinLossReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunityWinLossReason/count', rest))
	},

	async deleteOpportunityWinLossReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`opportunityWinLossReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getOpportunityWinLossReasonById(fetch, id) {
		return fetch(`opportunityWinLossReason/id/${id}`)
	},

	async updateOpportunityWinLossReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`opportunityWinLossReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
