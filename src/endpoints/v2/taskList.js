// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTaskList(fetch, {...rest} = {}) {
		return fetch(buildUrl('taskList', rest))
	},

	async createTaskList(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('taskList', rest), {method: 'POST', body})
	},

	async countTaskList(fetch, {...rest} = {}) {
		return fetch(buildUrl('taskList/count', rest))
	},

	async deleteTaskListById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`taskList/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTaskListById(fetch, id) {
		return fetch(`taskList/id/${id}`)
	},

	async updateTaskListById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`taskList/id/${id}`, rest), {method: 'PUT', body})
	}
}
