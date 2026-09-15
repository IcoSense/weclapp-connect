// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryBankAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('bankAccount', rest))
	},

	async createBankAccount(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('bankAccount', rest), {method: 'POST', body})
	},

	async countBankAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('bankAccount/count', rest))
	},

	async deleteBankAccountById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`bankAccount/id/${id}`, rest), {method: 'DELETE'})
	},

	async getBankAccountById(fetch, id) {
		return fetch(`bankAccount/id/${id}`)
	},

	async updateBankAccountById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`bankAccount/id/${id}`, rest), {method: 'PUT', body})
	}
}
