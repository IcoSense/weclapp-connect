// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPaymentMethod(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentMethod', rest))
	},

	async createPaymentMethod(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('paymentMethod', rest), {method: 'POST', body})
	},

	async countPaymentMethod(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentMethod/count', rest))
	},

	async deletePaymentMethodById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`paymentMethod/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPaymentMethodById(fetch, id) {
		return fetch(`paymentMethod/id/${id}`)
	},

	async updatePaymentMethodById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`paymentMethod/id/${id}`, rest), {method: 'PUT', body})
	}
}
