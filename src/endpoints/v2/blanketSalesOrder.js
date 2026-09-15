// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryBlanketSalesOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('blanketSalesOrder', rest))
	},

	async countBlanketSalesOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('blanketSalesOrder/count', rest))
	},

	async getBlanketSalesOrderById(fetch, id) {
		return fetch(`blanketSalesOrder/id/${id}`)
	}
}
