// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async readPropertyTranslations(fetch, {...rest} = {}) {
		return fetch(buildUrl('propertyTranslation/readPropertyTranslations', rest))
	},

	async updatePropertyTranslations(fetch, body) {
		return fetch('propertyTranslation/updatePropertyTranslations', {method: 'POST', body})
	}
}
