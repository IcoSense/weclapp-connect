// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySalesStage(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesStage', rest))
	},

	async createSalesStage(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('salesStage', rest), {method: 'POST', body})
	},

	async countSalesStage(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesStage/count', rest))
	},

	async deleteSalesStageById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`salesStage/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSalesStageById(fetch, id) {
		return fetch(`salesStage/id/${id}`)
	},

	async updateSalesStageById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`salesStage/id/${id}`, rest), {method: 'PUT', body})
	}
}
