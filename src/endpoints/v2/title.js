// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTitle(fetch, {...rest} = {}) {
		return fetch(buildUrl('title', rest))
	},

	async createTitle(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('title', rest), {method: 'POST', body})
	},

	async countTitle(fetch, {...rest} = {}) {
		return fetch(buildUrl('title/count', rest))
	},

	async deleteTitleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`title/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTitleById(fetch, id) {
		return fetch(`title/id/${id}`)
	},

	async updateTitleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`title/id/${id}`, rest), {method: 'PUT', body})
	}
}
