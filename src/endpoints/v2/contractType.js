// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryContractType(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractType', rest))
	},

	async createContractType(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('contractType', rest), {method: 'POST', body})
	},

	async countContractType(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractType/count', rest))
	},

	async deleteContractTypeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`contractType/id/${id}`, rest), {method: 'DELETE'})
	},

	async getContractTypeById(fetch, id) {
		return fetch(`contractType/id/${id}`)
	},

	async updateContractTypeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`contractType/id/${id}`, rest), {method: 'PUT', body})
	}
}
