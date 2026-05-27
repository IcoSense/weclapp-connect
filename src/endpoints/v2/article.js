// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArticle(fetch, {...rest} = {}) {
		return fetch(buildUrl('article', rest))
	},

	async createArticle(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('article', rest), {method: 'POST', body})
	},

	async countArticle(fetch, {...rest} = {}) {
		return fetch(buildUrl('article/count', rest))
	},

	async deleteArticleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`article/id/${id}`, rest), {method: 'DELETE'})
	},

	async getArticleById(fetch, id) {
		return fetch(`article/id/${id}`)
	},

	async updateArticleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`article/id/${id}`, rest), {method: 'PUT', body})
	},

	async changeUnitArticleById(fetch, id, body) {
		return fetch(`article/id/${id}/changeUnit`, {method: 'POST', body})
	},

	async createDatasheetPdfArticleById(fetch, id, body) {
		return fetch(`article/id/${id}/createDatasheetPdf`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async createLabelPdfArticleById(fetch, id, body) {
		return fetch(`article/id/${id}/createLabelPdf`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async downloadArticleImageById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`article/id/${id}/downloadArticleImage`, rest), {responseType: 'arraybuffer'})
	},

	async downloadMainArticleImageById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`article/id/${id}/downloadMainArticleImage`, rest), {responseType: 'arraybuffer'})
	},

	async packagingUnitStructureArticleById(fetch, id) {
		return fetch(`article/id/${id}/packagingUnitStructure`)
	},

	async uploadArticleImageById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`article/id/${id}/uploadArticleImage`, rest), {method: 'POST', body})
	}
}
