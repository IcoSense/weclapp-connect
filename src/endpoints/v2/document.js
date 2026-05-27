// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryDocument(fetch, {...rest} = {}) {
		return fetch(buildUrl('document', rest))
	},

	async copyDocument(fetch, body) {
		return fetch('document/copy', {method: 'POST', body})
	},

	async countDocument(fetch, {...rest} = {}) {
		return fetch(buildUrl('document/count', rest))
	},

	async deleteDocumentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`document/id/${id}`, rest), {method: 'DELETE'})
	},

	async getDocumentById(fetch, id) {
		return fetch(`document/id/${id}`)
	},

	async updateDocumentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`document/id/${id}`, rest), {method: 'PUT', body})
	},

	async copyDocumentById(fetch, id, body) {
		return fetch(`document/id/${id}/copy`, {method: 'POST', body})
	},

	async downloadDocumentById(fetch, id) {
		return fetch(`document/id/${id}/download`, {responseType: 'arraybuffer'})
	},

	async downloadDocumentVersionById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`document/id/${id}/downloadDocumentVersion`, rest), {responseType: 'arraybuffer'})
	},

	async downloadDocumentVersionsZippedById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`document/id/${id}/downloadDocumentVersionsZipped`, rest), {responseType: 'arraybuffer'})
	},

	async uploadDocumentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`document/id/${id}/upload`, rest), {method: 'POST', body})
	},

	async uploadDocument(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('document/upload', rest), {method: 'POST', body})
	}
}
