// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryUnit(fetch, {...rest} = {}) {
		return fetch(buildUrl('unit', rest))
	},

	async createUnit(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('unit', rest), {method: 'POST', body})
	},

	async countUnit(fetch, {...rest} = {}) {
		return fetch(buildUrl('unit/count', rest))
	},

	async deleteUnitById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`unit/id/${id}`, rest), {method: 'DELETE'})
	},

	async getUnitById(fetch, id) {
		return fetch(`unit/id/${id}`)
	},

	async updateUnitById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`unit/id/${id}`, rest), {method: 'PUT', body})
	}
}
