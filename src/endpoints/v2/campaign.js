// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCampaign(fetch, {...rest} = {}) {
		return fetch(buildUrl('campaign', rest))
	},

	async createCampaign(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('campaign', rest), {method: 'POST', body})
	},

	async countCampaign(fetch, {...rest} = {}) {
		return fetch(buildUrl('campaign/count', rest))
	},

	async deleteCampaignById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`campaign/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCampaignById(fetch, id) {
		return fetch(`campaign/id/${id}`)
	},

	async updateCampaignById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`campaign/id/${id}`, rest), {method: 'PUT', body})
	}
}
