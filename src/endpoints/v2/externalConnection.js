// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryExternalConnection(fetch, {...rest} = {}) {
		return fetch(buildUrl('externalConnection', rest))
	},

	async countExternalConnection(fetch, {...rest} = {}) {
		return fetch(buildUrl('externalConnection/count', rest))
	},

	async getExternalConnectionById(fetch, id) {
		return fetch(`externalConnection/id/${id}`)
	},

	async startArticleSynchronizationExternalConnectionById(fetch, id, body) {
		return fetch(`externalConnection/id/${id}/startArticleSynchronization`, {method: 'POST', body})
	},

	async startEbayListingSynchronizationExternalConnectionById(fetch, id, body) {
		return fetch(`externalConnection/id/${id}/startEbayListingSynchronization`, {method: 'POST', body})
	},

	async startOrderSynchronizationExternalConnectionById(fetch, id, body) {
		return fetch(`externalConnection/id/${id}/startOrderSynchronization`, {method: 'POST', body})
	}
}
