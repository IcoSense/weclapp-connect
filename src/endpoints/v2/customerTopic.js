// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCustomerTopic(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerTopic', rest))
	},

	async createCustomerTopic(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('customerTopic', rest), {method: 'POST', body})
	},

	async countCustomerTopic(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerTopic/count', rest))
	},

	async deleteCustomerTopicById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`customerTopic/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCustomerTopicById(fetch, id) {
		return fetch(`customerTopic/id/${id}`)
	},

	async updateCustomerTopicById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`customerTopic/id/${id}`, rest), {method: 'PUT', body})
	}
}
