// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryParty(fetch, {...rest} = {}) {
		return fetch(buildUrl('party', rest))
	},

	async createParty(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('party', rest), {method: 'POST', body})
	},

	async countParty(fetch, {...rest} = {}) {
		return fetch(buildUrl('party/count', rest))
	},

	async deletePartyById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`party/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPartyById(fetch, id) {
		return fetch(`party/id/${id}`)
	},

	async updatePartyById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`party/id/${id}`, rest), {method: 'PUT', body})
	},

	async createPublicPagePartyById(fetch, id, body) {
		return fetch(`party/id/${id}/createPublicPage`, {method: 'POST', body})
	},

	async downloadImagePartyById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`party/id/${id}/downloadImage`, rest), {responseType: 'arraybuffer'})
	},

	async startTransferAddressesToOpenRecordsPartyById(fetch, id, body) {
		return fetch(`party/id/${id}/startTransferAddressesToOpenRecords`, {method: 'POST', body})
	},

	async startTransferEmailAddressesToOpenRecordsPartyById(fetch, id, body) {
		return fetch(`party/id/${id}/startTransferEmailAddressesToOpenRecords`, {method: 'POST', body})
	},

	async uploadImagePartyById(fetch, id, body) {
		return fetch(`party/id/${id}/uploadImage`, {method: 'POST', body})
	}
}
