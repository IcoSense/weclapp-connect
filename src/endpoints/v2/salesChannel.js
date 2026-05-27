// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async activeSalesChannels(fetch) {
		return fetch('salesChannel/activeSalesChannels')
	},

	async salesChannelUsage(fetch, {...rest} = {}) {
		return fetch(buildUrl('salesChannel/salesChannelUsage', rest))
	}
}
