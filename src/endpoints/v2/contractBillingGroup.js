// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryContractBillingGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractBillingGroup', rest))
	},

	async createContractBillingGroup(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('contractBillingGroup', rest), {method: 'POST', body})
	},

	async countContractBillingGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractBillingGroup/count', rest))
	},

	async deleteContractBillingGroupById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`contractBillingGroup/id/${id}`, rest), {method: 'DELETE'})
	},

	async getContractBillingGroupById(fetch, id) {
		return fetch(`contractBillingGroup/id/${id}`)
	},

	async updateContractBillingGroupById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`contractBillingGroup/id/${id}`, rest), {method: 'PUT', body})
	}
}
