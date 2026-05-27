// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCustomerLeadLossReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerLeadLossReason', rest))
	},

	async createCustomerLeadLossReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('customerLeadLossReason', rest), {method: 'POST', body})
	},

	async countCustomerLeadLossReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerLeadLossReason/count', rest))
	},

	async deleteCustomerLeadLossReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`customerLeadLossReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCustomerLeadLossReasonById(fetch, id) {
		return fetch(`customerLeadLossReason/id/${id}`)
	},

	async updateCustomerLeadLossReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`customerLeadLossReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
