// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPickCheckReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('pickCheckReason', rest))
	},

	async createPickCheckReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('pickCheckReason', rest), {method: 'POST', body})
	},

	async countPickCheckReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('pickCheckReason/count', rest))
	},

	async deletePickCheckReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`pickCheckReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPickCheckReasonById(fetch, id) {
		return fetch(`pickCheckReason/id/${id}`)
	},

	async updatePickCheckReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`pickCheckReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
