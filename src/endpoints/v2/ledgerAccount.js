// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryLedgerAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('ledgerAccount', rest))
	},

	async createLedgerAccount(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('ledgerAccount', rest), {method: 'POST', body})
	},

	async countLedgerAccount(fetch, {...rest} = {}) {
		return fetch(buildUrl('ledgerAccount/count', rest))
	},

	async deleteLedgerAccountById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`ledgerAccount/id/${id}`, rest), {method: 'DELETE'})
	},

	async getLedgerAccountById(fetch, id) {
		return fetch(`ledgerAccount/id/${id}`)
	},

	async updateLedgerAccountById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`ledgerAccount/id/${id}`, rest), {method: 'PUT', body})
	}
}
