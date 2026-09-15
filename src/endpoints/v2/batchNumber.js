// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryBatchNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('batchNumber', rest))
	},

	async countBatchNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('batchNumber/count', rest))
	},

	async getBatchNumberById(fetch, id) {
		return fetch(`batchNumber/id/${id}`)
	}
}
