// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryOpportunityTopic(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunityTopic', rest))
	},

	async createOpportunityTopic(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('opportunityTopic', rest), {method: 'POST', body})
	},

	async countOpportunityTopic(fetch, {...rest} = {}) {
		return fetch(buildUrl('opportunityTopic/count', rest))
	},

	async deleteOpportunityTopicById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`opportunityTopic/id/${id}`, rest), {method: 'DELETE'})
	},

	async getOpportunityTopicById(fetch, id) {
		return fetch(`opportunityTopic/id/${id}`)
	},

	async updateOpportunityTopicById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`opportunityTopic/id/${id}`, rest), {method: 'PUT', body})
	}
}
