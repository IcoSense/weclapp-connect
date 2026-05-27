// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryServiceQuota(fetch, {...rest} = {}) {
		return fetch(buildUrl('serviceQuota', rest))
	},

	async countServiceQuota(fetch, {...rest} = {}) {
		return fetch(buildUrl('serviceQuota/count', rest))
	},

	async deleteServiceQuotaById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`serviceQuota/id/${id}`, rest), {method: 'DELETE'})
	},

	async getServiceQuotaById(fetch, id) {
		return fetch(`serviceQuota/id/${id}`)
	},

	async updateServiceQuotaById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`serviceQuota/id/${id}`, rest), {method: 'PUT', body})
	},

	async closeServiceQuotaById(fetch, id, body) {
		return fetch(`serviceQuota/id/${id}/close`, {method: 'POST', body})
	},

	async createPerformanceRecordServiceQuotaById(fetch, id, body) {
		return fetch(`serviceQuota/id/${id}/createPerformanceRecord`, {method: 'POST', body})
	},

	async openServiceQuotaById(fetch, id, body) {
		return fetch(`serviceQuota/id/${id}/open`, {method: 'POST', body})
	}
}
