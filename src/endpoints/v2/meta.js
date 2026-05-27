// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async legacyReferencePropertiesMeta(fetch, {...rest} = {}) {
		return fetch(buildUrl('meta/legacyReferenceProperties', rest))
	},

	async queryFilterPropertiesMeta(fetch, {...rest} = {}) {
		return fetch(buildUrl('meta/queryFilterProperties', rest))
	},

	async querySortPropertiesMeta(fetch, {...rest} = {}) {
		return fetch(buildUrl('meta/querySortProperties', rest))
	},

	async resourcesMeta(fetch) {
		return fetch('meta/resources')
	},

	async validationErrorCodesMeta(fetch, {...rest} = {}) {
		return fetch(buildUrl('meta/validationErrorCodes', rest))
	}
}
