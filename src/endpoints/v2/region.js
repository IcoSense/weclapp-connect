// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryRegion(fetch, {...rest} = {}) {
		return fetch(buildUrl('region', rest))
	},

	async createRegion(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('region', rest), {method: 'POST', body})
	},

	async countRegion(fetch, {...rest} = {}) {
		return fetch(buildUrl('region/count', rest))
	},

	async deleteRegionById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`region/id/${id}`, rest), {method: 'DELETE'})
	},

	async getRegionById(fetch, id) {
		return fetch(`region/id/${id}`)
	},

	async updateRegionById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`region/id/${id}`, rest), {method: 'PUT', body})
	},

	async resetResponsiblePersonRegionById(fetch, id, body) {
		return fetch(`region/id/${id}/resetResponsiblePerson`, {method: 'POST', body})
	}
}
