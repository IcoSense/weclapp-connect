// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCampaignParticipant(fetch, {...rest} = {}) {
		return fetch(buildUrl('campaignParticipant', rest))
	},

	async createCampaignParticipant(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('campaignParticipant', rest), {method: 'POST', body})
	},

	async countCampaignParticipant(fetch, {...rest} = {}) {
		return fetch(buildUrl('campaignParticipant/count', rest))
	},

	async deleteCampaignParticipantById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`campaignParticipant/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCampaignParticipantById(fetch, id) {
		return fetch(`campaignParticipant/id/${id}`)
	},

	async updateCampaignParticipantById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`campaignParticipant/id/${id}`, rest), {method: 'PUT', body})
	}
}
