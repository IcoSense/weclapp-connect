// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async querySector(fetch, {...rest} = {}) {
		return fetch(buildUrl('sector', rest))
	},

	async createSector(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('sector', rest), {method: 'POST', body})
	},

	async countSector(fetch, {...rest} = {}) {
		return fetch(buildUrl('sector/count', rest))
	},

	async deleteSectorById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`sector/id/${id}`, rest), {method: 'DELETE'})
	},

	async getSectorById(fetch, id) {
		return fetch(`sector/id/${id}`)
	},

	async updateSectorById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`sector/id/${id}`, rest), {method: 'PUT', body})
	}
}
