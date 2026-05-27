// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShipmentReturnAssessment(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnAssessment', rest))
	},

	async createShipmentReturnAssessment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnAssessment', rest), {method: 'POST', body})
	},

	async countShipmentReturnAssessment(fetch, {...rest} = {}) {
		return fetch(buildUrl('shipmentReturnAssessment/count', rest))
	},

	async deleteShipmentReturnAssessmentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnAssessment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShipmentReturnAssessmentById(fetch, id) {
		return fetch(`shipmentReturnAssessment/id/${id}`)
	},

	async updateShipmentReturnAssessmentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shipmentReturnAssessment/id/${id}`, rest), {method: 'PUT', body})
	}
}
