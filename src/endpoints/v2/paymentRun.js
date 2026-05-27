// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPaymentRun(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentRun', rest))
	},

	async countPaymentRun(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentRun/count', rest))
	},

	async deletePaymentRunById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`paymentRun/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPaymentRunById(fetch, id) {
		return fetch(`paymentRun/id/${id}`)
	},

	async updatePaymentRunById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`paymentRun/id/${id}`, rest), {method: 'PUT', body})
	}
}
