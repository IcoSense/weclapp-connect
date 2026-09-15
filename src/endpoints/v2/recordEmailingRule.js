// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryRecordEmailingRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('recordEmailingRule', rest))
	},

	async createRecordEmailingRule(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('recordEmailingRule', rest), {method: 'POST', body})
	},

	async countRecordEmailingRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('recordEmailingRule/count', rest))
	},

	async deleteRecordEmailingRuleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`recordEmailingRule/id/${id}`, rest), {method: 'DELETE'})
	},

	async getRecordEmailingRuleById(fetch, id) {
		return fetch(`recordEmailingRule/id/${id}`)
	},

	async updateRecordEmailingRuleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`recordEmailingRule/id/${id}`, rest), {method: 'PUT', body})
	}
}
