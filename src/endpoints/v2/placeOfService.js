// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPlaceOfService(fetch, {...rest} = {}) {
		return fetch(buildUrl('placeOfService', rest))
	},

	async createPlaceOfService(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('placeOfService', rest), {method: 'POST', body})
	},

	async countPlaceOfService(fetch, {...rest} = {}) {
		return fetch(buildUrl('placeOfService/count', rest))
	},

	async deletePlaceOfServiceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`placeOfService/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPlaceOfServiceById(fetch, id) {
		return fetch(`placeOfService/id/${id}`)
	},

	async updatePlaceOfServiceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`placeOfService/id/${id}`, rest), {method: 'PUT', body})
	}
}
