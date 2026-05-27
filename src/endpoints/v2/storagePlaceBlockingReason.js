// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryStoragePlaceBlockingReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceBlockingReason', rest))
	},

	async createStoragePlaceBlockingReason(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceBlockingReason', rest), {method: 'POST', body})
	},

	async countStoragePlaceBlockingReason(fetch, {...rest} = {}) {
		return fetch(buildUrl('storagePlaceBlockingReason/count', rest))
	},

	async deleteStoragePlaceBlockingReasonById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`storagePlaceBlockingReason/id/${id}`, rest), {method: 'DELETE'})
	},

	async getStoragePlaceBlockingReasonById(fetch, id) {
		return fetch(`storagePlaceBlockingReason/id/${id}`)
	},

	async updateStoragePlaceBlockingReasonById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`storagePlaceBlockingReason/id/${id}`, rest), {method: 'PUT', body})
	}
}
