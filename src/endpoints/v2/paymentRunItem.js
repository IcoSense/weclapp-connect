// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPaymentRunItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentRunItem', rest))
	},

	async countPaymentRunItem(fetch, {...rest} = {}) {
		return fetch(buildUrl('paymentRunItem/count', rest))
	},

	async getPaymentRunItemById(fetch, id) {
		return fetch(`paymentRunItem/id/${id}`)
	}
}
