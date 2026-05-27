// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryContractAuthorizationUnit(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractAuthorizationUnit', rest))
	},

	async countContractAuthorizationUnit(fetch, {...rest} = {}) {
		return fetch(buildUrl('contractAuthorizationUnit/count', rest))
	},

	async getContractAuthorizationUnitById(fetch, id) {
		return fetch(`contractAuthorizationUnit/id/${id}`)
	}
}
