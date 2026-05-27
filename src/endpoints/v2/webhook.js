// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWebhook(fetch, {...rest} = {}) {
		return fetch(buildUrl('webhook', rest))
	},

	async createWebhook(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('webhook', rest), {method: 'POST', body})
	},

	async countWebhook(fetch, {...rest} = {}) {
		return fetch(buildUrl('webhook/count', rest))
	},

	async deleteWebhookById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`webhook/id/${id}`, rest), {method: 'DELETE'})
	},

	async getWebhookById(fetch, id) {
		return fetch(`webhook/id/${id}`)
	},

	async updateWebhookById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`webhook/id/${id}`, rest), {method: 'PUT', body})
	}
}
