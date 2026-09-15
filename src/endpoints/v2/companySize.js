// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCompanySize(fetch, {...rest} = {}) {
		return fetch(buildUrl('companySize', rest))
	},

	async createCompanySize(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('companySize', rest), {method: 'POST', body})
	},

	async countCompanySize(fetch, {...rest} = {}) {
		return fetch(buildUrl('companySize/count', rest))
	},

	async deleteCompanySizeById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`companySize/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCompanySizeById(fetch, id) {
		return fetch(`companySize/id/${id}`)
	},

	async updateCompanySizeById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`companySize/id/${id}`, rest), {method: 'PUT', body})
	}
}
