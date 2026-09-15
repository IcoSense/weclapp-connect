// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryPerformanceRecord(fetch, {...rest} = {}) {
		return fetch(buildUrl('performanceRecord', rest))
	},

	async createPerformanceRecord(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('performanceRecord', rest), {method: 'POST', body})
	},

	async countPerformanceRecord(fetch, {...rest} = {}) {
		return fetch(buildUrl('performanceRecord/count', rest))
	},

	async deletePerformanceRecordById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`performanceRecord/id/${id}`, rest), {method: 'DELETE'})
	},

	async getPerformanceRecordById(fetch, id) {
		return fetch(`performanceRecord/id/${id}`)
	},

	async updatePerformanceRecordById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`performanceRecord/id/${id}`, rest), {method: 'PUT', body})
	},

	async addToPerformanceRecordById(fetch, id, body) {
		return fetch(`performanceRecord/id/${id}/addToPerformanceRecord`, {method: 'POST', body})
	},

	async createInvoicePerformanceRecordById(fetch, id, body) {
		return fetch(`performanceRecord/id/${id}/createInvoice`, {method: 'POST', body})
	},

	async downloadLatestPerformanceRecordPdfById(fetch, id) {
		return fetch(`performanceRecord/id/${id}/downloadLatestPerformanceRecordPdf`, {responseType: 'arraybuffer'})
	},

	async downloadSignaturePerformanceRecordById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`performanceRecord/id/${id}/downloadSignature`, rest), {responseType: 'arraybuffer'})
	},

	async performServiceQuotaAssignmentForTimeRecordsPerformanceRecordById(fetch, id, body) {
		return fetch(`performanceRecord/id/${id}/performServiceQuotaAssignmentForTimeRecords`, {method: 'POST', body})
	},

	async recalculateQuantitiesPerformanceRecordById(fetch, id, body) {
		return fetch(`performanceRecord/id/${id}/recalculateQuantities`, {method: 'POST', body})
	},

	async removeSignaturePerformanceRecordById(fetch, id, body) {
		return fetch(`performanceRecord/id/${id}/removeSignature`, {method: 'POST', body})
	},

	async uploadSignaturePerformanceRecordById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`performanceRecord/id/${id}/uploadSignature`, rest), {method: 'POST', body})
	},

	async startConfiguredMassPerformanceRecordCreation(fetch, body) {
		return fetch('performanceRecord/startConfiguredMassPerformanceRecordCreation', {method: 'POST', body})
	}
}
