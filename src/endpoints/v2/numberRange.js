// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryNumberRange(fetch, {...rest} = {}) {
		return fetch(buildUrl('numberRange', rest))
	},

	async countNumberRange(fetch, {...rest} = {}) {
		return fetch(buildUrl('numberRange/count', rest))
	},

	async getNumberRangeById(fetch, id) {
		return fetch(`numberRange/id/${id}`)
	},

	async missingNumberRanges(fetch) {
		return fetch('numberRange/missingNumberRanges')
	}
}
