// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTermOfPayment(fetch, {...rest} = {}) {
		return fetch(buildUrl('termOfPayment', rest))
	},

	async createTermOfPayment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('termOfPayment', rest), {method: 'POST', body})
	},

	async countTermOfPayment(fetch, {...rest} = {}) {
		return fetch(buildUrl('termOfPayment/count', rest))
	},

	async deleteTermOfPaymentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`termOfPayment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTermOfPaymentById(fetch, id) {
		return fetch(`termOfPayment/id/${id}`)
	},

	async updateTermOfPaymentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`termOfPayment/id/${id}`, rest), {method: 'PUT', body})
	}
}
