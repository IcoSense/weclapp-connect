// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticlePrice(fetch, {...rest} = {}) {
		return fetch(buildUrl('articlePrice', rest))
	},

	async countArticlePrice(fetch, {...rest} = {}) {
		return fetch(buildUrl('articlePrice/count', rest))
	},

	async getArticlePriceById(fetch, id) {
		return fetch(`articlePrice/id/${id}`)
	}
}
