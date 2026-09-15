// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryManufacturer(fetch, {...rest} = {}) {
		return fetch(buildUrl('manufacturer', rest))
	},

	async createManufacturer(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('manufacturer', rest), {method: 'POST', body})
	},

	async countManufacturer(fetch, {...rest} = {}) {
		return fetch(buildUrl('manufacturer/count', rest))
	},

	async deleteManufacturerById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`manufacturer/id/${id}`, rest), {method: 'DELETE'})
	},

	async getManufacturerById(fetch, id) {
		return fetch(`manufacturer/id/${id}`)
	},

	async updateManufacturerById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`manufacturer/id/${id}`, rest), {method: 'PUT', body})
	}
}
