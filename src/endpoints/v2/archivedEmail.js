// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryArchivedEmail(fetch, {...rest} = {}) {
		return fetch(buildUrl('archivedEmail', rest))
	},

	async countArchivedEmail(fetch, {...rest} = {}) {
		return fetch(buildUrl('archivedEmail/count', rest))
	},

	async getArchivedEmailById(fetch, id) {
		return fetch(`archivedEmail/id/${id}`)
	},

	async removeReferenceArchivedEmailById(fetch, id, body) {
		return fetch(`archivedEmail/id/${id}/removeReference`, {method: 'POST', body})
	}
}
