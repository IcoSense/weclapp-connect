// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticleAccountingCode(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleAccountingCode', rest))
	},

	async createArticleAccountingCode(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('articleAccountingCode', rest), {method: 'POST', body})
	},

	async countArticleAccountingCode(fetch, {...rest} = {}) {
		return fetch(buildUrl('articleAccountingCode/count', rest))
	},

	async deleteArticleAccountingCodeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`articleAccountingCode/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleAccountingCodeById(fetch, id) {
		return fetch(`articleAccountingCode/id/${id}`)
	},

	async updateArticleAccountingCodeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`articleAccountingCode/id/${id}`, rest), {method: 'PUT', body})
	}
}
