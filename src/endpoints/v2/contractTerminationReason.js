// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryContractTerminationReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractTerminationReason', rest))
	},

	async createContractTerminationReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('contractTerminationReason', rest), {method: 'POST', body})
	},

	async countContractTerminationReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractTerminationReason/count', rest))
	},

	async deleteContractTerminationReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`contractTerminationReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getContractTerminationReasonById(fetch, id) {
		return fetch(`contractTerminationReason/id/${id}`)
	},

	async updateContractTerminationReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`contractTerminationReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
