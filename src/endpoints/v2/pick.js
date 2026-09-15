// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPick(fetch, {...rest} = {}) {
		return fetch(buildUrl('pick', rest))
	},

	async countPick(fetch, {...rest} = {}) {
		return fetch(buildUrl('pick/count', rest))
	},

	async getPickById(fetch, id) {
		return fetch(`pick/id/${id}`)
	}
}
