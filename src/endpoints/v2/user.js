// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryUser(fetch, {...rest} = {}) {
		return fetch(buildUrl('user', rest))
	},

	async createUser(fetch, body, {...rest} = {}) {
		return fetch(buildUrl('user', rest), {method: 'POST', body})
	},

	async countUser(fetch, {...rest} = {}) {
		return fetch(buildUrl('user/count', rest))
	},

	async currentUser(fetch) {
		return fetch('user/currentUser')
	},

	async getUserById(fetch, id) {
		return fetch(`user/id/${id}`)
	},

	async updateUserById(fetch, id, body, {...rest} = {}) {
		return fetch(buildUrl(`user/id/${id}`, rest), {method: 'PUT', body})
	},

	async deleteMfaDeviceUserById(fetch, id, body) {
		return fetch(`user/id/${id}/deleteMfaDevice`, {method: 'POST', body})
	},

	async inviteUserById(fetch, id, body) {
		return fetch(`user/id/${id}/invite`, {method: 'POST', body})
	},

	async readMfaDevicesUserById(fetch, id) {
		return fetch(`user/id/${id}/readMfaDevices`)
	},

	async softDeleteUserById(fetch, id, body) {
		return fetch(`user/id/${id}/softDelete`, {method: 'POST', body})
	},

	async userImageById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`user/id/${id}/userImage`, rest), {responseType: 'arraybuffer'})
	},

	async userImageThumbnailById(fetch, id, {...rest} = {}) {
		return fetch(buildUrl(`user/id/${id}/userImageThumbnail`, rest), {responseType: 'arraybuffer'})
	}
}
