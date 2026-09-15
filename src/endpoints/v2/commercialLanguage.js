// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCommercialLanguage(fetch, {...rest} = {}) {
		return fetch(buildUrl('commercialLanguage', rest))
	},

	async countCommercialLanguage(fetch, {...rest} = {}) {
		return fetch(buildUrl('commercialLanguage/count', rest))
	},

	async getCommercialLanguageById(fetch, id) {
		return fetch(`commercialLanguage/id/${id}`)
	}
}
