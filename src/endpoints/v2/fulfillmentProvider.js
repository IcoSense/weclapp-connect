// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryFulfillmentProvider(fetch, {...rest} = {}) {
		return fetch(buildUrl('fulfillmentProvider', rest))
	},

	async countFulfillmentProvider(fetch, {...rest} = {}) {
		return fetch(buildUrl('fulfillmentProvider/count', rest))
	},

	async getFulfillmentProviderById(fetch, id) {
		return fetch(`fulfillmentProvider/id/${id}`)
	}
}
