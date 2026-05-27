// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryNumberRangeValue(fetch, {...rest} = {}) {
		return fetch(buildUrl('numberRangeValue', rest))
	},

	async countNumberRangeValue(fetch, {...rest} = {}) {
		return fetch(buildUrl('numberRangeValue/count', rest))
	},

	async getNumberRangeValueById(fetch, id) {
		return fetch(`numberRangeValue/id/${id}`)
	}
}
