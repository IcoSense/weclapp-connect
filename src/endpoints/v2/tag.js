// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTag(fetch, {...rest} = {}) {
		return fetch(buildUrl('tag', rest))
	},

	async createTag(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('tag', rest), {method: 'POST', body})
	},

	async countTag(fetch, {...rest} = {}) {
		return fetch(buildUrl('tag/count', rest))
	},

	async deleteTagById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`tag/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTagById(fetch, id) {
		return fetch(`tag/id/${id}`)
	},

	async updateTagById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`tag/id/${id}`, rest), {method: 'PUT', body})
	}
}
