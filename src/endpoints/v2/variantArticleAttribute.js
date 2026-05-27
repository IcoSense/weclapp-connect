// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryVariantArticleAttribute(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticleAttribute', rest))
	},

	async createVariantArticleAttribute(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('variantArticleAttribute', rest), {method: 'POST', body})
	},

	async countVariantArticleAttribute(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticleAttribute/count', rest))
	},

	async deleteVariantArticleAttributeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`variantArticleAttribute/id/${id}`, rest), {method: 'DELETE'})
	},

	async getVariantArticleAttributeById(fetch, id) {
		return fetch(`variantArticleAttribute/id/${id}`)
	},

	async updateVariantArticleAttributeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`variantArticleAttribute/id/${id}`, rest), {method: 'PUT', body})
	}
}
