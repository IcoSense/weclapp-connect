// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryStorageLocation(fetch, {...rest} = {}) {
		return fetch(buildUrl('storageLocation', rest))
	},

	async createStorageLocation(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('storageLocation', rest), {method: 'POST', body})
	},

	async countStorageLocation(fetch, {...rest} = {}) {
		return fetch(buildUrl('storageLocation/count', rest))
	},

	async deleteStorageLocationById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`storageLocation/id/${id}`, rest), {method: 'DELETE'})
	},

	async getStorageLocationById(fetch, id) {
		return fetch(`storageLocation/id/${id}`)
	},

	async updateStorageLocationById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`storageLocation/id/${id}`, rest), {method: 'PUT', body})
	},

	async activateStorageLocationById(fetch, id, body) {
		return fetch(`storageLocation/id/${id}/activate`, {method: 'POST', body})
	},

	async deactivateStorageLocationById(fetch, id, body) {
		return fetch(`storageLocation/id/${id}/deactivate`, {method: 'POST', body})
	}
}
