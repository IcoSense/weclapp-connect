// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCashAccountSheet(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccountSheet', rest))
	},

	async createCashAccountSheet(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('cashAccountSheet', rest), {method: 'POST', body})
	},

	async countCashAccountSheet(fetch, {...rest} = {}) {
		return fetch(buildUrl('cashAccountSheet/count', rest))
	},

	async deleteCashAccountSheetById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`cashAccountSheet/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCashAccountSheetById(fetch, id) {
		return fetch(`cashAccountSheet/id/${id}`)
	},

	async updateCashAccountSheetById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`cashAccountSheet/id/${id}`, rest), {method: 'PUT', body})
	}
}
