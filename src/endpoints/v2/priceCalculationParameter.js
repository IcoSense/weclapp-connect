// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPriceCalculationParameter(fetch, {...rest} = {}) {
		return fetch(buildUrl('priceCalculationParameter', rest))
	},

	async createPriceCalculationParameter(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('priceCalculationParameter', rest), {method: 'POST', body})
	},

	async countPriceCalculationParameter(fetch, {...rest} = {}) {
		return fetch(buildUrl('priceCalculationParameter/count', rest))
	},

	async deletePriceCalculationParameterById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`priceCalculationParameter/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPriceCalculationParameterById(fetch, id) {
		return fetch(`priceCalculationParameter/id/${id}`)
	},

	async updatePriceCalculationParameterById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`priceCalculationParameter/id/${id}`, rest), {method: 'PUT', body})
	}
}
