// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCustomsTariffNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('customsTariffNumber', rest))
	},

	async createCustomsTariffNumber(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('customsTariffNumber', rest), {method: 'POST', body})
	},

	async countCustomsTariffNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('customsTariffNumber/count', rest))
	},

	async deleteCustomsTariffNumberById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`customsTariffNumber/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCustomsTariffNumberById(fetch, id) {
		return fetch(`customsTariffNumber/id/${id}`)
	},

	async updateCustomsTariffNumberById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`customsTariffNumber/id/${id}`, rest), {method: 'PUT', body})
	}
}
