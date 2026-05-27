// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTicketPoolingGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketPoolingGroup', rest))
	},

	async countTicketPoolingGroup(fetch, {...rest} = {}) {
		return fetch(buildUrl('ticketPoolingGroup/count', rest))
	},

	async getTicketPoolingGroupById(fetch, id) {
		return fetch(`ticketPoolingGroup/id/${id}`)
	}
}
