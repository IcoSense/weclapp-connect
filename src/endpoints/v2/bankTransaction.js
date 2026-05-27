// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryBankTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('bankTransaction', rest))
	},

	async countBankTransaction(fetch, {...rest} = {}) {
		return fetch(buildUrl('bankTransaction/count', rest))
	},

	async deleteBankTransactionById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`bankTransaction/id/${id}`, rest), {method: 'DELETE'})
	},

	async getBankTransactionById(fetch, id) {
		return fetch(`bankTransaction/id/${id}`)
	}
}
