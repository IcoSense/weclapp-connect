// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWeclappOs(fetch, {...rest} = {}) {
		return fetch(buildUrl('weclappOs', rest))
	},

	async createWeclappOs(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('weclappOs', rest), {method: 'POST', body})
	},

	async countWeclappOs(fetch, {...rest} = {}) {
		return fetch(buildUrl('weclappOs/count', rest))
	},

	async deleteWeclappOsById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`weclappOs/id/${id}`, rest), {method: 'DELETE'})
	},

	async getWeclappOsById(fetch, id) {
		return fetch(`weclappOs/id/${id}`)
	},

	async updateWeclappOsById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`weclappOs/id/${id}`, rest), {method: 'PUT', body})
	}
}
