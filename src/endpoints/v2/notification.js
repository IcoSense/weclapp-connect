// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryNotification(fetch, {...rest} = {}) {
		return fetch(buildUrl('notification', rest))
	},

	async countNotification(fetch, {...rest} = {}) {
		return fetch(buildUrl('notification/count', rest))
	},

	async getNotificationById(fetch, id) {
		return fetch(`notification/id/${id}`)
	},

	async markReadNotificationById(fetch, id, body) {
		return fetch(`notification/id/${id}/markRead`, {method: 'POST', body})
	}
}
