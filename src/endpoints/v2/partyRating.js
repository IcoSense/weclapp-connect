// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPartyRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('partyRating', rest))
	},

	async createPartyRating(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('partyRating', rest), {method: 'POST', body})
	},

	async countPartyRating(fetch, {...rest} = {}) {
		return fetch(buildUrl('partyRating/count', rest))
	},

	async deletePartyRatingById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`partyRating/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPartyRatingById(fetch, id) {
		return fetch(`partyRating/id/${id}`)
	},

	async updatePartyRatingById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`partyRating/id/${id}`, rest), {method: 'PUT', body})
	}
}
