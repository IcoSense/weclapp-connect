// Generated from weclapp-openapi-v2.yaml — do not edit

module.exports = {

	async createDemoTestSystem(fetch, body) {
		return fetch('system/createDemoTestSystem', {method: 'POST', body})
	},

	async demoTestSystemInfo(fetch) {
		return fetch('system/demoTestSystemInfo')
	},

	async licensesSystem(fetch) {
		return fetch('system/licenses')
	},

	async permissionsSystem(fetch) {
		return fetch('system/permissions')
	}
}
