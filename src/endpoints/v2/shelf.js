// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryShelf(fetch, {...rest} = {}) {
		return fetch(buildUrl('shelf', rest))
	},

	async createShelf(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('shelf', rest), {method: 'POST', body})
	},

	async countShelf(fetch, {...rest} = {}) {
		return fetch(buildUrl('shelf/count', rest))
	},

	async deleteShelfById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`shelf/id/${id}`, rest), {method: 'DELETE'})
	},

	async getShelfById(fetch, id) {
		return fetch(`shelf/id/${id}`)
	},

	async updateShelfById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`shelf/id/${id}`, rest), {method: 'PUT', body})
	},

	async activateShelfById(fetch, id, body) {
		return fetch(`shelf/id/${id}/activate`, {method: 'POST', body})
	},

	async deactivateShelfById(fetch, id, body) {
		return fetch(`shelf/id/${id}/deactivate`, {method: 'POST', body})
	}
}
