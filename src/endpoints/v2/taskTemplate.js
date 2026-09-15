// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTaskTemplate(fetch, {...rest} = {}) {
		return fetch(buildUrl('taskTemplate', rest))
	},

	async createTaskTemplate(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('taskTemplate', rest), {method: 'POST', body})
	},

	async countTaskTemplate(fetch, {...rest} = {}) {
		return fetch(buildUrl('taskTemplate/count', rest))
	},

	async deleteTaskTemplateById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`taskTemplate/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTaskTemplateById(fetch, id) {
		return fetch(`taskTemplate/id/${id}`)
	},

	async updateTaskTemplateById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`taskTemplate/id/${id}`, rest), {method: 'PUT', body})
	}
}
