// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async abortJob(fetch, {...rest} = {}) {
		return fetch(buildUrl('job/abort', rest))
	},

	async statusJob(fetch, {...rest} = {}) {
		return fetch(buildUrl('job/status', rest))
	}
}
