// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryLeadRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('leadRating', rest))
	},

	async createLeadRating(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('leadRating', rest), {method: 'POST', body})
	},

	async countLeadRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('leadRating/count', rest))
	},

	async deleteLeadRatingById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`leadRating/id/${id}`, rest), {method: 'DELETE'})
	},

	async getLeadRatingById(fetch, id) {
		return fetch(`leadRating/id/${id}`)
	},

	async updateLeadRatingById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`leadRating/id/${id}`, rest), {method: 'PUT', body})
	}
}
