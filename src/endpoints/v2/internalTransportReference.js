// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryInternalTransportReference(fetch, {...rest} = {}) {
		return fetch(buildUrl('internalTransportReference', rest))
	},

	async createInternalTransportReference(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('internalTransportReference', rest), {method: 'POST', body})
	},

	async countInternalTransportReference(fetch, {...rest} = {}) {
		return fetch(buildUrl('internalTransportReference/count', rest))
	},

	async deleteInternalTransportReferenceById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`internalTransportReference/id/${id}`, rest), {method: 'DELETE'})
	},

	async getInternalTransportReferenceById(fetch, id) {
		return fetch(`internalTransportReference/id/${id}`)
	},

	async updateInternalTransportReferenceById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`internalTransportReference/id/${id}`, rest), {method: 'PUT', body})
	},

	async createLabelInternalTransportReferenceById(fetch, id, body) {
		return fetch(`internalTransportReference/id/${id}/createLabel`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async downloadLatestLabelInternalTransportReferenceById(fetch, id) {
		return fetch(`internalTransportReference/id/${id}/downloadLatestLabel`, {responseType: 'arraybuffer'})
	}
}
