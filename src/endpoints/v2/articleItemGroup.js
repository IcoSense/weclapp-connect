// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleItemGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleItemGroup', rest))
	},

	async createArticleItemGroup(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleItemGroup', rest), {method: 'POST', body})
	},

	async countArticleItemGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleItemGroup/count', rest))
	},

	async deleteArticleItemGroupById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleItemGroup/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleItemGroupById(fetch, id) {
		return fetch(`articleItemGroup/id/${id}`)
	},

	async updateArticleItemGroupById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleItemGroup/id/${id}`, rest), {method: 'PUT', body})
	}
}
