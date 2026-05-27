// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryContract(fetch, {...rest} = {}) {
		return fetch(buildUrl('contract', rest))
	},

	async createContract(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('contract', rest), {method: 'POST', body})
	},

	async countContract(fetch, {...rest} = {}) {
		return fetch(buildUrl('contract/count', rest))
	},

	async deleteContractById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`contract/id/${id}`, rest), {method: 'DELETE'})
	},

	async getContractById(fetch, id) {
		return fetch(`contract/id/${id}`)
	},

	async updateContractById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`contract/id/${id}`, rest), {method: 'PUT', body})
	},

	async createContractDocumentById(fetch, id, body) {
		return fetch(`contract/id/${id}/createContractDocument`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async downloadLatestContractDocumentPdfById(fetch, id) {
		return fetch(`contract/id/${id}/downloadLatestContractDocumentPdf`, {responseType: 'arraybuffer'})
	}
}
