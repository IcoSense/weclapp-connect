// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryVariantArticleVariant(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticleVariant', rest))
	},

	async countVariantArticleVariant(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticleVariant/count', rest))
	},

	async getVariantArticleVariantById(fetch, id) {
		return fetch(`variantArticleVariant/id/${id}`)
	}
}
