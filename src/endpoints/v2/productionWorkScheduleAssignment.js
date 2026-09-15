// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryProductionWorkScheduleAssignment(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionWorkScheduleAssignment', rest))
	},

	async createProductionWorkScheduleAssignment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('productionWorkScheduleAssignment', rest), {method: 'POST', body})
	},

	async countProductionWorkScheduleAssignment(fetch, {...rest} = {}) {
		return fetch(buildUrl('productionWorkScheduleAssignment/count', rest))
	},

	async deleteProductionWorkScheduleAssignmentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`productionWorkScheduleAssignment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getProductionWorkScheduleAssignmentById(fetch, id) {
		return fetch(`productionWorkScheduleAssignment/id/${id}`)
	},

	async updateProductionWorkScheduleAssignmentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`productionWorkScheduleAssignment/id/${id}`, rest), {method: 'PUT', body})
	}
}
