// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryRebate(fetch, {...rest} = {}) {
		return fetch(buildUrl('rebate', rest))
	},

	async createRebate(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('rebate', rest), {method: 'POST', body})
	},

	async countRebate(fetch, {...rest} = {}) {
		return fetch(buildUrl('rebate/count', rest))
	},

	async deleteRebateById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`rebate/id/${id}`, rest), {method: 'DELETE'})
	},

	async getRebateById(fetch, id) {
		return fetch(`rebate/id/${id}`)
	},

	async updateRebateById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`rebate/id/${id}`, rest), {method: 'PUT', body})
	}
}
