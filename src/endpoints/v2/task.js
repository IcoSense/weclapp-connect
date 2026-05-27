// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTask(fetch, {...rest} = {}) {
		return fetch(buildUrl('task', rest))
	},

	async createTask(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('task', rest), {method: 'POST', body})
	},

	async countTask(fetch, {...rest} = {}) {
		return fetch(buildUrl('task/count', rest))
	},

	async fromTemplateTask(fetch, {...rest} = {}) {
		return fetch(buildUrl('task/fromTemplate', rest))
	},

	async deleteTaskById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`task/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTaskById(fetch, id) {
		return fetch(`task/id/${id}`)
	},

	async updateTaskById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`task/id/${id}`, rest), {method: 'PUT', body})
	},

	async createPerformanceRecordTaskById(fetch, id, body) {
		return fetch(`task/id/${id}/createPerformanceRecord`, {method: 'POST', body})
	},

	async updateBillingDataTaskById(fetch, id, body) {
		return fetch(`task/id/${id}/updateBillingData`, {method: 'POST', body})
	}
}
