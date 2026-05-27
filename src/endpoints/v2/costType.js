// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCostType(fetch, {...rest} = {}) {
		return fetch(buildUrl('costType', rest))
	},

	async createCostType(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('costType', rest), {method: 'POST', body})
	},

	async countCostType(fetch, {...rest} = {}) {
		return fetch(buildUrl('costType/count', rest))
	},

	async deleteCostTypeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`costType/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCostTypeById(fetch, id) {
		return fetch(`costType/id/${id}`)
	},

	async updateCostTypeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`costType/id/${id}`, rest), {method: 'PUT', body})
	}
}
