// Generated from weclapp-openapi-v2.yaml — do not edit
const {buildUrl} = require('../../utils')

module.exports = {

	async queryWarehouseStockMovement(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouseStockMovement', rest))
	},

	async bookDirectStockTransferWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookDirectStockTransfer', {method: 'POST', body})
	},

	async bookFromLoadingEquipmentPlaceWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookFromLoadingEquipmentPlace', {method: 'POST', body})
	},

	async bookIncomingMovementWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookIncomingMovement', {method: 'POST', body})
	},

	async bookOntoInternalTransportReferenceWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookOntoInternalTransportReference', {method: 'POST', body})
	},

	async bookOutgoingMovementWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookOutgoingMovement', {method: 'POST', body})
	},

	async bookToLoadingEquipmentPlaceWarehouseStockMovement(fetch, body) {
		return fetch('warehouseStockMovement/bookToLoadingEquipmentPlace', {method: 'POST', body})
	},

	async countWarehouseStockMovement(fetch, {...rest} = {}) {
		return fetch(buildUrl('warehouseStockMovement/count', rest))
	},

	async getWarehouseStockMovementById(fetch, id) {
		return fetch(`warehouseStockMovement/id/${id}`)
	}
}
