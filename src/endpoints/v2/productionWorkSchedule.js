// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryProductionWorkSchedule(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionWorkSchedule', rest))
	},

	async createProductionWorkSchedule(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('productionWorkSchedule', rest), {method: 'POST', body})
	},

	async countProductionWorkSchedule(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionWorkSchedule/count', rest))
	},

	async deleteProductionWorkScheduleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`productionWorkSchedule/id/${id}`, rest), {method: 'DELETE'})
	},

	async getProductionWorkScheduleById(fetch, id) {
		return fetch(`productionWorkSchedule/id/${id}`)
	},

	async updateProductionWorkScheduleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`productionWorkSchedule/id/${id}`, rest), {method: 'PUT', body})
	}
}
