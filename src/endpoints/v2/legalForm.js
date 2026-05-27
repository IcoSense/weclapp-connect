// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryLegalForm(fetch, {...rest} = {}) {
		return fetch(buildUrl('legalForm', rest))
	},

	async createLegalForm(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('legalForm', rest), {method: 'POST', body})
	},

	async countLegalForm(fetch, {...rest} = {}) {
		return fetch(buildUrl('legalForm/count', rest))
	},

	async deleteLegalFormById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`legalForm/id/${id}`, rest), {method: 'DELETE'})
	},

	async getLegalFormById(fetch, id) {
		return fetch(`legalForm/id/${id}`)
	},

	async updateLegalFormById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`legalForm/id/${id}`, rest), {method: 'PUT', body})
	}
}
