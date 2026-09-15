// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySerialNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('serialNumber', rest))
	},

	async countSerialNumber(fetch, {...rest} = {}) {
		return fetch(buildUrl('serialNumber/count', rest))
	},

	async getSerialNumberById(fetch, id) {
		return fetch(`serialNumber/id/${id}`)
	},

	async updateSerialNumberById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`serialNumber/id/${id}`, rest), {method: 'PUT', body})
	}
}
