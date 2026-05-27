// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryStoragePlaceSize(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceSize', rest))
	},

	async createStoragePlaceSize(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceSize', rest), {method: 'POST', body})
	},

	async countStoragePlaceSize(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceSize/count', rest))
	},

	async deleteStoragePlaceSizeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`storagePlaceSize/id/${id}`, rest), {method: 'DELETE'})
	},

	async getStoragePlaceSizeById(fetch, id) {
		return fetch(`storagePlaceSize/id/${id}`)
	},

	async updateStoragePlaceSizeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`storagePlaceSize/id/${id}`, rest), {method: 'PUT', body})
	}
}
