// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryTransportationOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('transportationOrder', rest))
	},

	async createTransportationOrder(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('transportationOrder', rest), {method: 'POST', body})
	},

	async countTransportationOrder(fetch, {...rest} = {}) {
		return fetch(buildUrl('transportationOrder/count', rest))
	},

	async deleteTransportationOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`transportationOrder/id/${id}`, rest), {method: 'DELETE'})
	},

	async getTransportationOrderById(fetch, id) {
		return fetch(`transportationOrder/id/${id}`)
	},

	async updateTransportationOrderById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`transportationOrder/id/${id}`, rest), {method: 'PUT', body})
	},

	async addPicksTransportationOrderById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/addPicks`, {method: 'POST', body})
	},

	async createPickTransportationOrderById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/createPick`, {method: 'POST', body})
	},

	async createPickingListTransportationOrderById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/createPickingList`, {method: 'POST', body, responseType: 'arraybuffer'})
	},

	async createTransportationOrderFromUnpickedRecordsById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/createTransportationOrderFromUnpickedRecords`, {method: 'POST', body})
	},

	async internalTransportReferencesForPickUpTransportationOrderById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`transportationOrder/id/${id}/internalTransportReferencesForPickUp`, rest))
	},

	async pickPickTransportationOrderById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/pickPick`, {method: 'POST', body})
	},

	async putDownInternalTransportReferenceTransportationOrderById(fetch, id, body) {
		return fetch(`transportationOrder/id/${id}/putDownInternalTransportReference`, {method: 'POST', body})
	}
}
