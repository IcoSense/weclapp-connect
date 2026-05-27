// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCostCenterGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('costCenterGroup', rest))
	},

	async createCostCenterGroup(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('costCenterGroup', rest), {method: 'POST', body})
	},

	async countCostCenterGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('costCenterGroup/count', rest))
	},

	async deleteCostCenterGroupById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`costCenterGroup/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCostCenterGroupById(fetch, id) {
		return fetch(`costCenterGroup/id/${id}`)
	},

	async updateCostCenterGroupById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`costCenterGroup/id/${id}`, rest), {method: 'PUT', body})
	}
}
