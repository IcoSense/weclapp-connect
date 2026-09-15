// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryCustomerCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerCategory', rest))
	},

	async createCustomerCategory(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('customerCategory', rest), {method: 'POST', body})
	},

	async countCustomerCategory(fetch, {...rest} = {}) {
		return fetch(buildUrl('customerCategory/count', rest))
	},

	async deleteCustomerCategoryById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`customerCategory/id/${id}`, rest), {method: 'DELETE'})
	},

	async getCustomerCategoryById(fetch, id) {
		return fetch(`customerCategory/id/${id}`)
	},

	async updateCustomerCategoryById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`customerCategory/id/${id}`, rest), {method: 'PUT', body})
	}
}
