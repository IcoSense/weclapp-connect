// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCostCenter(fetch, {...rest} = {}) {
		return fetch(buildUrl('costCenter', rest))
	},

	async createCostCenter(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('costCenter', rest), {method: 'POST', body})
	},

	async countCostCenter(fetch, {...rest} = {}) {
		return fetch(buildUrl('costCenter/count', rest))
	},

	async deleteCostCenterById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`costCenter/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCostCenterById(fetch, id) {
		return fetch(`costCenter/id/${id}`)
	},

	async updateCostCenterById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`costCenter/id/${id}`, rest), {method: 'PUT', body})
	}
}
