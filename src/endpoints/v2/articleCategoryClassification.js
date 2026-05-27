// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleCategoryClassification(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleCategoryClassification', rest))
	},

	async createArticleCategoryClassification(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleCategoryClassification', rest), {method: 'POST', body})
	},

	async countArticleCategoryClassification(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleCategoryClassification/count', rest))
	},

	async deleteArticleCategoryClassificationById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleCategoryClassification/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleCategoryClassificationById(fetch, id) {
		return fetch(`articleCategoryClassification/id/${id}`)
	},

	async updateArticleCategoryClassificationById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleCategoryClassification/id/${id}`, rest), {method: 'PUT', body})
	}
}
