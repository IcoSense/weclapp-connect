// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWarehouseStock(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouseStock', rest))
	},

	async countWarehouseStock(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouseStock/count', rest))
	},

	async getWarehouseStockById(fetch, id) {
		return fetch(`warehouseStock/id/${id}`)
	}
}
