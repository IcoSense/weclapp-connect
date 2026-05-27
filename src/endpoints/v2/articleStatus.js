// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleStatus(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleStatus', rest))
	},

	async createArticleStatus(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleStatus', rest), {method: 'POST', body})
	},

	async countArticleStatus(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleStatus/count', rest))
	},

	async deleteArticleStatusById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleStatus/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleStatusById(fetch, id) {
		return fetch(`articleStatus/id/${id}`)
	},

	async updateArticleStatusById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleStatus/id/${id}`, rest), {method: 'PUT', body})
	}
}
