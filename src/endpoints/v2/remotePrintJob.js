// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryRemotePrintJob(fetch, {...rest} = {}) {
		return fetch(buildUrl('remotePrintJob', rest))
	},

	async createRemotePrintJob(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('remotePrintJob', rest), {method: 'POST', body})
	},

	async countRemotePrintJob(fetch, {...rest} = {}) {
		return fetch(buildUrl('remotePrintJob/count', rest))
	},

	async createPrintJobWithDocumentRemotePrintJob(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('remotePrintJob/createPrintJobWithDocument', rest), {method: 'POST', body})
	},

	async deleteRemotePrintJobById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`remotePrintJob/id/${id}`, rest), {method: 'DELETE'})
	},

	async getRemotePrintJobById(fetch, id) {
		return fetch(`remotePrintJob/id/${id}`)
	},

	async updateRemotePrintJobById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`remotePrintJob/id/${id}`, rest), {method: 'PUT', body})
	}
}
