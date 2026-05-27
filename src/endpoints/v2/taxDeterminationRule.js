// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTaxDeterminationRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('taxDeterminationRule', rest))
	},

	async createTaxDeterminationRule(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('taxDeterminationRule', rest), {method: 'POST', body})
	},

	async countTaxDeterminationRule(fetch, {...rest} = {}) {
		return fetch(buildUrl('taxDeterminationRule/count', rest))
	},

	async deleteTaxDeterminationRuleById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`taxDeterminationRule/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTaxDeterminationRuleById(fetch, id) {
		return fetch(`taxDeterminationRule/id/${id}`)
	},

	async updateTaxDeterminationRuleById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`taxDeterminationRule/id/${id}`, rest), {method: 'PUT', body})
	}
}
