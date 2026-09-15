// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryStoragePlace(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlace', rest))
	},

	async countStoragePlace(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlace/count', rest))
	},

	async getStoragePlaceById(fetch, id) {
		return fetch(`storagePlace/id/${id}`)
	}
}
