// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPersonalAccountingCode(fetch, {...rest} = {}) {
		return fetch(buildUrl('personalAccountingCode', rest))
	},

	async createPersonalAccountingCode(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('personalAccountingCode', rest), {method: 'POST', body})
	},

	async countPersonalAccountingCode(fetch, {...rest} = {}) {
		return fetch(buildUrl('personalAccountingCode/count', rest))
	},

	async deletePersonalAccountingCodeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`personalAccountingCode/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPersonalAccountingCodeById(fetch, id) {
		return fetch(`personalAccountingCode/id/${id}`)
	},

	async updatePersonalAccountingCodeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`personalAccountingCode/id/${id}`, rest), {method: 'PUT', body})
	}
}
