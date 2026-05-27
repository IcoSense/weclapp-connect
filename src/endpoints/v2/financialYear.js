// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryFinancialYear(fetch, {...rest} = {}) {
		return fetch(buildUrl('financialYear', rest))
	},

	async createFinancialYear(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('financialYear', rest), {method: 'POST', body})
	},

	async countFinancialYear(fetch, {...rest} = {}) {
		return fetch(buildUrl('financialYear/count', rest))
	},

	async deleteFinancialYearById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`financialYear/id/${id}`, rest), {method: 'DELETE'})
	},

	async getFinancialYearById(fetch, id) {
		return fetch(`financialYear/id/${id}`)
	},

	async updateFinancialYearById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`financialYear/id/${id}`, rest), {method: 'PUT', body})
	},

	async generatePeriodsFinancialYearById(fetch, id, body) {
		return fetch(`financialYear/id/${id}/generatePeriods`, {method: 'POST', body})
	}
}
