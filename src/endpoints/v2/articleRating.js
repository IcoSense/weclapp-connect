// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleRating', rest))
	},

	async createArticleRating(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleRating', rest), {method: 'POST', body})
	},

	async countArticleRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleRating/count', rest))
	},

	async deleteArticleRatingById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleRating/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleRatingById(fetch, id) {
		return fetch(`articleRating/id/${id}`)
	},

	async updateArticleRatingById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleRating/id/${id}`, rest), {method: 'PUT', body})
	}
}
