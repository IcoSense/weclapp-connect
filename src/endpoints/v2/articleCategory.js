// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleCategory', rest))
	},

	async createArticleCategory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleCategory', rest), {method: 'POST', body})
	},

	async countArticleCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleCategory/count', rest))
	},

	async deleteArticleCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleCategory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleCategoryById(fetch, id) {
		return fetch(`articleCategory/id/${id}`)
	},

	async updateArticleCategoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleCategory/id/${id}`, rest), {method: 'PUT', body})
	},

	async downloadImageArticleCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleCategory/id/${id}/downloadImage`, rest), {responseType: 'arraybuffer'})
	},

	async uploadImageArticleCategoryById(fetch, id, body) {
		return fetch(`articleCategory/id/${id}/uploadImage`, {method: 'POST', body})
	}
}
