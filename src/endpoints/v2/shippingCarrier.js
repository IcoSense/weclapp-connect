// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShippingCarrier(fetch, {...rest} = {}) {
		return fetch(buildUrl('shippingCarrier', rest))
	},

	async createShippingCarrier(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shippingCarrier', rest), {method: 'POST', body})
	},

	async countShippingCarrier(fetch, {...rest} = {}) {
		return fetch(buildUrl('shippingCarrier/count', rest))
	},

	async deleteShippingCarrierById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shippingCarrier/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShippingCarrierById(fetch, id) {
		return fetch(`shippingCarrier/id/${id}`)
	},

	async updateShippingCarrierById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shippingCarrier/id/${id}`, rest), {method: 'PUT', body})
	}
}
