// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTranslation(fetch, {...rest} = {}) {
		return fetch(buildUrl('translation', rest))
	},

	async createTranslation(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('translation', rest), {method: 'POST', body})
	},

	async countTranslation(fetch, {...rest} = {}) {
		return fetch(buildUrl('translation/count', rest))
	},

	async deleteTranslationById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`translation/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTranslationById(fetch, id) {
		return fetch(`translation/id/${id}`)
	},

	async updateTranslationById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`translation/id/${id}`, rest), {method: 'PUT', body})
	}
}
