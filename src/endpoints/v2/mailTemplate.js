// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryMailTemplate(fetch, {...rest} = {}) {
		return fetch(buildUrl('mailTemplate', rest))
	},

	async createMailTemplate(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('mailTemplate', rest), {method: 'POST', body})
	},

	async countMailTemplate(fetch, {...rest} = {}) {
		return fetch(buildUrl('mailTemplate/count', rest))
	},

	async deleteMailTemplateById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`mailTemplate/id/${id}`, rest), {method: 'DELETE'})
	},

	async getMailTemplateById(fetch, id) {
		return fetch(`mailTemplate/id/${id}`)
	},

	async updateMailTemplateById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`mailTemplate/id/${id}`, rest), {method: 'PUT', body})
	}
}
