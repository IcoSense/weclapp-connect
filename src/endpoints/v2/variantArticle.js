// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryVariantArticle(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticle', rest))
	},

	async createVariantArticle(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('variantArticle', rest), {method: 'POST', body})
	},

	async countVariantArticle(fetch, {...rest} = {}) {
		return fetch(buildUrl('variantArticle/count', rest))
	},

	async deleteVariantArticleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`variantArticle/id/${id}`, rest), {method: 'DELETE'})
	},

	async getVariantArticleById(fetch, id) {
		return fetch(`variantArticle/id/${id}`)
	},

	async updateVariantArticleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`variantArticle/id/${id}`, rest), {method: 'PUT', body})
	}
}
