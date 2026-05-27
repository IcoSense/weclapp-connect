// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryComment(fetch, {...rest} = {}) {
		return fetch(buildUrl('comment', rest))
	},

	async createComment(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('comment', rest), {method: 'POST', body})
	},

	async countComment(fetch, {...rest} = {}) {
		return fetch(buildUrl('comment/count', rest))
	},

	async deleteCommentById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`comment/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCommentById(fetch, id) {
		return fetch(`comment/id/${id}`)
	},

	async updateCommentById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`comment/id/${id}`, rest), {method: 'PUT', body})
	}
}
