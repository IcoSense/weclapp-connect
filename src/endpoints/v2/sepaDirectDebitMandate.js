// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySepaDirectDebitMandate(fetch, {...rest} = {}) {
		return fetch(buildUrl('sepaDirectDebitMandate', rest))
	},

	async createSepaDirectDebitMandate(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('sepaDirectDebitMandate', rest), {method: 'POST', body})
	},

	async countSepaDirectDebitMandate(fetch, {...rest} = {}) {
		return fetch(buildUrl('sepaDirectDebitMandate/count', rest))
	},

	async deleteSepaDirectDebitMandateById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`sepaDirectDebitMandate/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSepaDirectDebitMandateById(fetch, id) {
		return fetch(`sepaDirectDebitMandate/id/${id}`)
	},

	async updateSepaDirectDebitMandateById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`sepaDirectDebitMandate/id/${id}`, rest), {method: 'PUT', body})
	}
}
