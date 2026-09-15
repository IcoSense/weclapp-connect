<h3 align="center">
   weclapp connect
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/@icosense/connect"><img
     alt="Version"
     src="https://img.shields.io/npm/v/@icosense/connect.svg?color=3498DB&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@icosense/connect"><img
     alt="Downloads"
     src="https://img.shields.io/npm/dw/@icosense/connect.svg?style=flat-square">
  </a>
  <img alt="Node version"
     src="https://img.shields.io/node/v/@icosense/connect.svg?style=flat-square">
</p>

weclapp-connect provides a way to communicate with the weclapp REST API through a simple and
easy-to-use nodejs module. Both **API v1** and **API v2** are supported; you pick one per
instance via the `apiVersion` option.

| | v1 | v2 |
|---|---|---|
| Endpoint modules | 59 (hand-written) | 154 (generated from the OpenAPI spec) |
| Methods | 340 | 1048 |
| Naming | historically inconsistent | one mechanical scheme |
| Binary downloads (PDF, images) | not supported | returned as a buffer |
| Status | maintained, still the default | recommended for new code |

## Installation

Install via npm:
```shell
$ npm install @icosense/connect
```

Install via yarn:
```shell
$ yarn add @icosense/connect
```

Requires Node.js >= 20.

## Quickstart

```js
const weclapp = require('@icosense/connect')

;(async () => {

	// Create an instance — nothing is requested yet
	const api = weclapp({
		apikey: '<string>',

		// One of the following
		tenant: '<string>', // Example: myapp   → myapp.weclapp.com
		domain: '<string>', // Example: app.company.com

		// Optional
		apiVersion: 'v2'    // 'v1' (default) or 'v2'
	})

	// Prints the users to the console
	console.log(await api.queryUser())
})()
```

`queryUser` is the v2 name; on v1 the equivalent is `getUsers`. See
[v2 method naming](#v2-method-naming) below.

## Choosing the API version

`apiVersion` selects both the URL segment and the set of methods on the returned instance.
It accepts `'v1'`, `'v2'`, `1`, `2` and `'V2'` — anything else throws.

```js
const v1 = weclapp({tenant, apikey})                     // → /webapp/api/v1/…
const v2 = weclapp({tenant, apikey, apiVersion: 'v2'})   // → /webapp/api/v2/…
```

The two surfaces are **mutually exclusive** — an instance exposes the methods of its version
only. A v2 instance has `getPartyById` but no `getCustomers`; a v1 instance has the reverse.
Run both side by side if you need to migrate incrementally.

## Configuration

```
weclapp({
	apikey: String,      // weclapp token / apikey. Keep this private.
	tenant: String,      // Your weclapp sub-domain. eg. in hello.weclapp.com the tenant is hello
	domain: String,      // Alternative to tenant, eg. app.company.com. Mutually exclusive with tenant.
	protocol: String,    // 'https' by default
	apiVersion: String   // 'v1' (default) or 'v2'
})
```

Exactly one of `tenant` or `domain` must be given, and `apikey` is required — otherwise the
factory throws. Requests are sent to:

```
{protocol}://{domain || tenant.weclapp.com}/webapp/api/{apiVersion}/{endpoint}
```

Authentication uses the `AuthenticationToken` header.

## Making requests

Every method returns a promise resolving to the parsed response body — for the binary methods
listed below, to the raw buffer instead.

Errors are not wrapped. A 4xx or 5xx response rejects with the `AxiosError` axios produces, so
the server's answer is on `err.response` (`err.response.status`, `err.response.data`); network
and timeout failures reject with an axios error carrying no `response`. That is the same
behaviour as 0.2.x and the same for both API versions.

### v2 method naming

The v2 surface is generated from `apidoc/weclapp-openapi-v2.yaml`, so the naming is uniform.
With `R` standing for the resource (`Article`, `Party`, `SalesOrder`, …):

| Request | Method | Signature |
|---|---|---|
| `GET /r` | `query{R}` | `({...query} = {})` |
| `GET /r/count` | `count{R}` | `({...query} = {})` |
| `POST /r` | `create{R}` | `(body, {...query} = {})` |
| `GET /r/id/{id}` | `get{R}ById` | `(id)` |
| `PUT /r/id/{id}` | `update{R}ById` | `(id, body, {...query} = {})` |
| `DELETE /r/id/{id}` | `delete{R}ById` | `(id, {...query} = {})` |
| `POST /r/{action}` | `{action}{R}` | `(body[, {...query}])` |
| `POST /r/id/{id}/{action}` | `{action}{R}ById` | `(id, body[, {...query}])` |
| `GET /r/id/{id}/{sub}` | `{sub}{R}ById` | `(id[, {...query}])` |

Two rules explain the exceptions you will notice:

- The trailing query object exists **only** when the operation declares query parameters, and
  it is always last and always optional. That is why `getArticleById(id)` takes no options
  object while `deleteArticleById(id, {...query})` does.
- The `{R}` part is dropped when the action name already contains the resource name — hence
  `createShipmentSalesOrderById(id, body)` but `previewSalesOrderConfirmationById(id)`.

```js
const api = weclapp({tenant, apikey, apiVersion: 'v2'})

await api.queryArticle({pageSize: 10, sort: '-createdDate'})
await api.countArticle()
await api.getArticleById('123')
await api.updateArticleById('123', {name: 'New name'})
await api.createParty({partyType: 'ORGANIZATION', company: 'ACME'})
await api.queryTimeRecord({'startDate-gt': 1700000000000})
```

The 154 v2 resource modules live in [`src/endpoints/v2/`](src/endpoints/v2) — one file per
resource, each listing its methods in full. They are generated; do not edit them by hand.

<details>
<summary>v2 resources</summary>

```
accountingTransaction, archivedEmail, article, articleAccountingCode, articleCategory,
articleCategoryClassification, articleItemGroup, articlePrice, articleRating, articleStatus,
articleSupplySource, attendance, bankAccount, bankTransaction, batchNumber,
blanketPurchaseOrder, blanketSalesOrder, calendar, calendarEvent, campaign,
campaignParticipant, cashAccount, cashAccountSheet, cashAccountTransaction, comment,
commercialLanguage, companySize, contract, contractAuthorizationUnit, contractBillingGroup,
contractTerminationReason, contractType, costCenter, costCenterGroup, costType,
crmCallCategory, crmEvent, crmEventCategory, currency, customAttributeDefinition,
customerCategory, customerLeadLossReason, customerTopic, customsTariffNumber, document,
externalConnection, financialYear, fulfillmentProvider, incomingGoods,
internalTransportReference, inventory, inventoryGroup, inventoryItem,
inventoryTransportReference, job, leadRating, leadSource, ledgerAccount, legalForm,
loadingEquipmentIdentifier, mailTemplate, manufacturer, meta, notification, numberRange,
numberRangeValue, opportunity, opportunityTopic, opportunityWinLossReason, party, partyRating,
paymentMethod, paymentRun, paymentRunItem, performanceRecord, personalAccountingCode,
personDepartment, personRole, pick, pickCheckReason, placeOfService,
priceCalculationParameter, productionOrder, productionWorkSchedule,
productionWorkScheduleAssignment, projectOrderStatusPage, propertyTranslation,
purchaseInvoice, purchaseOpenItem, purchaseOrder, purchaseOrderRequest, purchaseRequisition,
quotation, rebate, recordEmailingRule, region, reminder, remotePrintJob, salesChannel,
salesInvoice, salesOpenItem, salesOrder, salesStage, salesTeam, sector,
sepaDirectDebitMandate, serialNumber, serviceQuota, shelf, shipment, shipmentMethod,
shipmentReturnAssessment, shipmentReturnError, shipmentReturnReason,
shipmentReturnRectification, shippingCarrier, storageLocation, storagePlace,
storagePlaceBlockingReason, storagePlaceSize, system, tag, task, taskList, taskTemplate, tax,
taxDeterminationRule, termOfPayment, ticket, ticketAssignmentRule, ticketCategory,
ticketChannel, ticketFaq, ticketPoolingGroup, ticketPriority,
ticketServiceLevelAgreement, ticketStatus, ticketType, timeRecord, title, translation,
transportationOrder, unit, user, userRole, variantArticle, variantArticleAttribute,
variantArticleVariant, warehouse, warehouseStock, warehouseStockMovement, webhook, weclappOs,
workScheduleProfile
```

</details>

### Query parameters

Any key on the trailing query object is appended to the URL as-is, so weclapp's filter,
paging and projection syntax works without special support:

```js
await api.queryArticle({
	page: 1,
	pageSize: 50,
	sort: '-createdDate',
	'articleType-eq': 'STORABLE',
	includeReferencedEntities: 'unitId'
})
```

Note that falsy values are dropped when the query string is built, so `page: 0` and
`preview: false` are omitted rather than sent.

### Binary responses

44 v2 methods return binary data — PDF renderings, label prints and image downloads. These
set `responseType: 'arraybuffer'`, so you get a buffer back instead of parsed JSON:

```js
const pdf = await api.downloadLatestOrderConfirmationPdfSalesOrderById('123')
require('fs').writeFileSync('confirmation.pdf', Buffer.from(pdf))
```

v1 has no equivalent — it parses every response as JSON.

### Raw requests

Both versions expose the underlying request function, which is useful for endpoints the
generated surface does not cover:

```js
async fetch(endpoint, {method = 'GET', body, responseType} = {})
```

```js
await api.fetch('timeRecord')
await api.fetch('article/id/123', {method: 'PUT', body: {name: 'New name'}})
```

The endpoint is relative to the versioned base URL.

### v1 method naming

v1 method names grew over time and follow no single scheme: lists are `getArticles`, counts
are `getArticleCount`, updates are sometimes `updateSalesOrderForId(id, body)` and sometimes
`updateArticleById({id, body})`. A few methods take `id` inside a leading options object.

```js
const api = weclapp({tenant, apikey})

await api.getArticles({page: 1, pageSize: 50, sort: '-createdDate'})
await api.getArticleById('123')
await api.getUsers()
```

<details>
<summary>All 340 v1 methods</summary>

```js
async acceptQuotation(id, body)
async bookDirectStockTransfer(body)
async convertLeadToCustomer(id)
async createAdvancePaymentRequestSalesOrderForId(id, body)
async createArticle(body)
async createArticleCategory(body)
async createArticleSupplySource(body)
async createBookIncomingMovement(body)
async createBookOutgoingMovement(body)
async createBookTransferMovement(body)
async createCampaign(body)
async createCampaignParticipant(body)
async createCancelOrManualSalesOrderForId(id, body)
async createComment(body)
async createCompanySize(body)
async createCompensationShipmentForIncomingGood(id, body)
async createContact(body)
async createContactImageForId(id, body)
async createContract(body)
async createContractImageForId(id, body)
async createCreditNoteForIncomingGood(id, body)
async createCustomer(body)
async createCustomerCategory(body)
async createCustomerForId(id, body)
async createCustomerLeadLossReason(body)
async createCustomerReturnForId(id, body)
async createCustomerTopic(body)
async createCustomsTariffNumber(body)
async createDocument({id, comment}, body)
async createEntityDocument({entityName, entityId, name, description}, body)
async createIncomingGoods(body)
async createIncomingGoodsForPurchaseOrder(id, body)
async createLead(body)
async createLeadImageForId(id, body)
async createLeadSource(body)
async createManualCloseSalesOrderForId(id, body)
async createManufacturer(body)
async createOpportunity(body)
async createOpportunityWinLossReason(body)
async createPartPaymentInvoiceForId(id, body)
async createPaymentMethod(body)
async createPrepaymentInvoiceForId(id, body)
async createProductionOrder(body)
async createPurchaseInvoice(body)
async createPurchaseInvoiceForPurchaseOrder(id, body)
async createPurchaseOrder(body)
async createQuotation(body)
async createSalesInvoice(body)
async createSalesInvoiceForId(id, body)
async createSalesOrder(body)
async createSalesStage(body)
async createSector(body)
async createShipment(body)
async createShipmentForId(id, body)
async createShipmentMethod(body)
async createSupplier(body)
async createSupplierImageForId(id, body)
async createTax(body)
async createTermOfPayment(body)
async createTicket(body)
async createTicketExtraInfoForAppForId(id, body)
async createUnit(body)
async createVariantArticle(body)
async createVariantArticleAttribute(body)
async deleteArchievedEmailById(id)
async deleteArticleById(id)
async deleteArticleCategoryById(id)
async deleteCampaignById(id)
async deleteCampaignParticipantById(id)
async deleteCommentById(id)
async deleteCompanySizeById(id)
async deleteContactById(id)
async deleteContractById(id)
async deleteCustomerById(id)
async deleteCustomerCategoryById(id)
async deleteCustomerLeadLossReasonById(id)
async deleteCustomerTopicById(id)
async deleteCustomsTariffNumberById(id)
async deleteDocumentById(id)
async deleteLeadById(id)
async deleteLeadSourceById(id)
async deleteManufacturerById(id)
async deleteOpportunityById(id)
async deleteOpportunityWinLossReasonById(id)
async deletePaymentMethodById(id)
async deleteProductionOrderById(id)
async deleteQuotationById(id)
async deleteSalesStageById(id)
async deleteSectorById(id)
async deleteShipmentMethodById(id)
async deleteSupplierById(id)
async deleteTaxById(id)
async deleteTermOfPaymentById(id)
async deleteUnitById(id)
async deleteVariantArticleAttributeById(id)
async deleteVariantArticleById(id)
async fastProductionBooking(body)
async getArchievedEmailById(id)
async getArchievedEmailCount()
async getArchievedEmails()
async getArticleById(id)
async getArticleCategories({page, pageSize, sort, ...rest})
async getArticleCategoryById(id)
async getArticleCategoryCount()
async getArticleCount({page, pageSize = 50, sort, ...rest})
async getArticleImage({id, articleImageId, preview = false, scaleWidth, scaleHeight, ...rest})
async getArticlePriceById(id)
async getArticlePriceCount()
async getArticlePrices({page, pageSize, sort, ...rest})
async getArticleSupplySourceById(id)
async getArticleSupplySourceCount()
async getArticleSupplySources({page, pageSize, sort, ...rest})
async getArticles({page, pageSize = 50, sort, ...rest})
async getBatchNumberById(id)
async getBatchNumberCount()
async getBatchNumbers({page, pageSize, sort, ...rest})
async getCampaignById(id)
async getCampaignParticipantById(id)
async getCampaignParticipantCount()
async getCampaignParticipants({page, pageSize, sort, ...rest})
async getCampaigns({page, pageSize, sort, ...rest})
async getCampaignsCount()
async getCommentById(id)
async getCommentCount()
async getComments({page, pageSize, sort, ...rest})
async getCommercialLanguageById(id)
async getCommercialLanguageCount()
async getCommercialLanguages({page, pageSize, sort, ...rest})
async getCompanyCurrency()
async getCompanySizeById(id)
async getCompanySizeCount()
async getCompanySizes({page, pageSize, sort, ...rest})
async getContactById(id)
async getContactCount()
async getContactImageById({id, scaleWidth, scaleHeight, ...rest})
async getContacts({page, pageSize, sort, ...rest})
async getContractById(id)
async getContractCount({...rest})
async getContractImageById({id, scaleWidth, scaleHeight, ...rest})
async getContracts({page, pageSize, sort, ...rest})
async getCostCenter({page, pageSize, sort, ...rest})
async getCostCenterGroup({page, pageSize, sort, ...rest})
async getCostType({page, pageSize, sort, ...rest})
async getCurrencies({page, pageSize, sort, ...rest})
async getCurrencyById(id)
async getCurrencyCount()
async getCustomAttributeDefinitionById(id)
async getCustomAttributeDefinitionByIds(ids)
async getCustomAttributeDefinitionCount()
async getCustomAttributeDefinitions({page, pageSize, sort, ...rest})
async getCustomerById(id)
async getCustomerCategories({page, pageSize, sort, ...rest})
async getCustomerCategoryById(id)
async getCustomerCategoryCount()
async getCustomerCount({...rest})
async getCustomerImageById({id, scaleWidth, scaleHeight, ...rest})
async getCustomerLeadLossReasonById(id)
async getCustomerLeadLossReasonCount()
async getCustomerLeadLossReasons({page, pageSize, sort, ...rest})
async getCustomerTopicById(id)
async getCustomerTopicCount()
async getCustomerTopics({page, pageSize, sort, ...rest})
async getCustomers({page, pageSize, sort, ...rest})
async getCustomsTariffNumberById(id)
async getCustomsTariffNumberCount()
async getCustomsTariffNumbers({page, pageSize, sort, ...rest})
async getDocument({entityId, entityName})
async getDocumentAsDownloadById(id)
async getDocumentById(id)
async getDocumentCount()
async getDocumentVersion(id)
async getFulfillmentProviderById(id)
async getFulfillmentProviderCount()
async getFulfillmentProviders({page, pageSize, sort, ...rest})
async getIncomingGoods({page, pageSize, sort, ...rest})
async getIncomingGoodsById(id)
async getIncomingGoodsCount()
async getLatestDeliveryNotePdfId(id)
async getLatestOrderConfirmationPdfId(id)
async getLatestPickingListPdfById(id)
async getLatestProductionOrderPdfProductionOrderById(id)
async getLatestQuotationPdfById(id)
async getLatestSalesInvoicePdfById(id)
async getLatestShippingLabelPdfById(id)
async getLeadById(id)
async getLeadCount()
async getLeadImage({id, scaleWidth, scaleHeight, ...rest})
async getLeadSourceById(id)
async getLeadSourceCount()
async getLeadSources({page, pageSize, sort, ...rest})
async getLeads({page, pageSize, sort, ...rest})
async getManufacturerById(id)
async getManufacturerCount()
async getManufacturers({page, pageSize, sort, ...rest})
async getMetaQueryFilterProperties(resource)
async getMetaQuerySortProperties(resource)
async getMetaRessources()
async getOpportunity({page, pageSize, sort, ...rest})
async getOpportunityById(id)
async getOpportunityCount({...rest})
async getOpportunityWinLossReasonById(id)
async getOpportunityWinLossReasonCount()
async getOpportunityWinLossReasons({page, pageSize, sort, ...rest})
async getParties({page, pageSize, sort, ...rest})
async getPartyById(id)
async getPartyCount()
async getPaymentMethodById(id)
async getPaymentMethodCount()
async getPaymentMethods({page, pageSize, sort, ...rest})
async getPickCount({ page, pageSize, sort, ...rest })
async getPicks({ page, pageSize, sort, ...rest })
async getProductionOrderById(id)
async getProductionOrderCount()
async getProductionOrderPicksById(id)
async getProductionOrderWidthdrawalsById(id)
async getProductionOrders({page, pageSize, sort, ...rest})
async getPurchaseInvoiceById(id)
async getPurchaseInvoiceCount()
async getPurchaseInvoices({page, pageSize, sort, ...rest})
async getPurchaseOrderById(id)
async getPurchaseOrderCount()
async getPurchaseOrders({page, pageSize, sort, ...rest})
async getQuotationById(id)
async getQuotationCount()
async getQuotations({page, pageSize, sort, ...rest})
async getSalesChannel()
async getSalesInvoiceById(id)
async getSalesInvoiceCount({page, pageSize, sort, ...rest})
async getSalesInvoices({page, pageSize, sort, ...rest})
async getSalesOrderById(id)
async getSalesOrderCount()
async getSalesOrderForCustomer({customerId, responsibleUserId, ...rest})
async getSalesOrders({page, pageSize, sort, ...rest})
async getSalesStageById(id)
async getSalesStageCount()
async getSalesStages({page, pageSize, sort, ...rest})
async getSectorById(id)
async getSectorCount()
async getSectors({page, pageSize, sort, ...rest})
async getSerialNumberById(id)
async getSerialNumberCount()
async getSerialNumbers({page, pageSize, sort, ...rest})
async getShipmentById(id)
async getShipmentCount()
async getShipmentMethodById(id)
async getShipmentMethodCount()
async getShipmentMethods({page, pageSize, sort, ...rest})
async getShipments({page, pageSize, sort, ...rest})
async getStoragePlaceById(id)
async getStoragePlaceCount()
async getStoragePlaces({page, pageSize, sort, ...rest})
async getSupplierById(id)
async getSupplierImage({id, scaleWidth, scaleHeight, ...rest})
async getSuppliers({page, pageSize, sort, ...rest})
async getSuppliersCount()
async getTaxById(id)
async getTaxCount()
async getTaxFor({dispatchCountryCode, recipientCountryCode, taxRateType, partyType, ...rest})
async getTaxes({page, pageSize, sort, ...rest})
async getTermOfPaymentById(id)
async getTermOfPaymentCount()
async getTermsOfPayment({page, pageSize, sort, ...rest})
async getTicketById(id)
async getTicketCount({...rest})
async getTicketExtraInfoForAppById({id, ...rest})
async getTicketPriorities({page, pageSize, sort, ...rest})
async getTickets({page, pageSize, sort, ...rest})
async getUnitById(id)
async getUnitCount()
async getUnits({page, pageSize, sort, ...rest})
async getUser()
async getUserById(id)
async getUserCount()
async getUserImageById(id)
async getUserImageThumbnailById(id)
async getUsers({page, pageSize, sort, ...rest})
async getVariantArticleAttributeById(id)
async getVariantArticleAttributeCount()
async getVariantArticleAttributes({page, pageSize, sort, ...rest})
async getVariantArticleById(id)
async getVariantArticleCount()
async getVariantArticleVariantById(id)
async getVariantArticleVariantCount()
async getVariantArticleVariants({page, pageSize, sort, ...rest})
async getVariantArticles({page, pageSize, sort, ...rest})
async getWarehouseById(id)
async getWarehouseCount()
async getWarehouseLevelById(id)
async getWarehouseLevelCount()
async getWarehouseLevels({page, pageSize, sort, ...rest})
async getWarehouseStockById(id)
async getWarehouseStockCount({page, pageSize, sort, ...rest})
async getWarehouseStockMovementById(id)
async getWarehouseStockMovementCount({page, pageSize, sort, ...rest})
async getWarehouseStockMovements({page, pageSize, sort, ...rest})
async getWarehouseStocks({page, pageSize, sort, ...rest})
async getWarehouses({page, pageSize, sort, ...rest})
async updateArticleById({id, body, ...rest})
async updateArticleCategoryForId(id, body)
async updateArticleSupplySourceForId(id, body)
async updateCampaignForId(id, body)
async updateCampaignParticipantForId(id, body)
async updateCommentForId(id, body)
async updateCompanySizeForId(id, body)
async updateContactForId(id, body)
async updateContractForId(id, body)
async updateCustomerCategoryForId(id, body)
async updateCustomerForId(id, body)
async updateCustomerLeadLossReasonForId(id, body)
async updateCustomerTopicForId(id, body)
async updateCustomsTariffNumberForId(id, body)
async updateDocumentForId(id, body)
async updateIncomingGoodsForId(id, body)
async updateLeadForId(id, body)
async updateLeadSourceForId(id, body)
async updateManufacturerForId(id, body)
async updateOpportunityForId(id, body)
async updateOpportunityWinLossReasonForId(id, body)
async updatePaymentMethodForId(id, body)
async updateProductionOrderForId(id, body)
async updateProductionOrderPicksById(id, body)
async updateProductionOrderWidthdrawalsById(id, body)
async updatePurchaseInvoiceForId(id, body)
async updatePurchaseOrder(id, body)
async updateQuotationForId(id, body)
async updateSalesInvoiceForId(id, body)
async updateSalesOrderForId(id, body)
async updateSalesStageForId(id, body)
async updateSectorForId(id, body)
async updateSerialNumberForId(id, body)
async updateShipmentForId(id, body)
async updateShipmentMethodForId(id, body)
async updateSupplierForId(id, body)
async updateTaxForId(id, body)
async updateTermOfPaymentForId(id, body)
async updateTicketForId(id, body)
async updateUnitForId(id, body)
async updateVariantArticleAttributeForId(id, body)
async updateVariantArticleForId(id, body)
async uploadArticleImage({id, name, mainImage}, body)
```

</details>

## Upgrading from 0.2.x

The major-version jump reflects the added v2 surface, not a rewrite of v1. `apiVersion`
defaults to `'v1'`, and the v1 methods, their signatures, their return shapes and the error
behaviour are unchanged — upgrading without touching your code leaves you on v1 exactly as
before. Two smaller things did change:

- Node.js >= 20 is required.
- The `costCenter` and `pick` modules imported `src/utils` through the package's own name
  rather than a relative path. That resolved in an installed tree but not in a checkout; both
  now use a relative path.

Moving to v2 is a separate, per-instance decision — the next section covers what it involves.

## Migrating from v1 to v2

v2 is not a drop-in replacement. Beyond the renames, four resources were folded into `/party`
(`contact`, `customer`, `lead`, `supplier`), some properties were removed or renamed, and one
method — `updateArticleById` — kept its name but changed its arguments.

To make that reviewable, the repository ships two generated maps under
[`migration/`](migration), derived by comparing the v1 and v2 OpenAPI specs against the actual
endpoint modules. Matching is done on the **request** (verb + path), not on method names,
because v1 names are too inconsistent for name-based matching to be reliable.

### `migration/v1-to-v2-methods.json`

Splits all 340 v1 methods into two buckets:

- **`mapped`** (285 entries) — safe to apply mechanically: same request, and every existing
  call site keeps working.
- **`decisions`** (55 entries) — never apply automatically; each needs a human decision, even
  where a `suggestedV2` is given. Broken down by reason: `resource-removed` (33),
  `undocumented-in-v1` (13), `signature-breaking` (7), `operation-removed` (1),
  `hardcoded-filter` (1). Twelve carry a `rewrite` block showing the argument transformation;
  eight of those are marked `rewriteMechanical`.

```json
{
	"v1": "updateArticleById",
	"request": "PUT article/id/{id}",
	"v2": "updateArticleById",
	"callCompatible": false,
	"reason": "signature-breaking",
	"rewrite": {
		"v1Example": "updateArticleById({id, body, ...rest})",
		"v2Example": "updateArticleById(id, {...body, ...rest})",
		"note": "same method name, incompatible call -- v1 merged the leftover keys into the body, so a codemod must match on the argument shape, not the name"
	},
	"rewriteMechanical": true
}
```

```json
{
	"v1": "createContact",
	"module": "contact",
	"request": "POST contact",
	"reason": "resource-removed",
	"replacementResource": "party",
	"suggestedV2": "createParty",
	"requiresReview": true,
	"note": "/contact folded into /party; same URL shape, but verify id and role semantics per call site"
}
```

`rewriteProblems` must stay empty — a non-empty list means a curated rewrite rule no longer
matches the specs, and the generator exits non-zero rather than applying it silently.

### `migration/v1-to-v2-fields.json`

Per-schema property changes across 147 schemas: 170 removed properties over 67 schemas, and
371 `readOnly` properties over 117 schemas that a write payload must not contain.

All 170 removals are `silent` — the API does not complain, the field simply is not there. The
dominant kind is `secondary-reference` (105): a denormalized label like `accountNumber` is gone
and you now request it explicitly.

```json
{
	"property": "accountNumber",
	"kind": "secondary-reference",
	"idProperty": "accountId",
	"replacement": "includeReferencedEntities=accountId",
	"silent": true,
	"nameSurvivesInV2": 3,
	"survivingExamples": ["bankAccount", "ledgerAccount", "partyBankAccount"],
	"scopeWarning": "this property name still exists on other v2 schemas -- a source-code hit is only relevant if it is really this entity"
}
```

`nameSurvivesInV2` is the reason this file is worth reading before grepping: 59 of the removed
property names still exist on *other* v2 schemas, so a source hit is only actionable if it is
really that entity. The remaining kinds are `removed` (53), `rename-candidate` (6, with a
heuristic `confidence` score), `rename` (5, from weclapp's changelog) and `rename-ambiguous`
(1, where the changelog offers several targets and you pick per call site).

Both files carry `generatedBy`, `generatedAt`, `sourceSpecs` and a `contract` object
documenting how each bucket may be used.

## Development

```bash
# Run all tests — works without credentials
npm test

# Lint (src/app.js, src/utils.js, scripts, src/endpoints/v2)
npm run lint
npm run lint:fix

# Regenerate the v2 endpoint modules from apidoc/weclapp-openapi-v2.yaml
npm run generate:v2

# Regenerate the migration maps from both specs + the endpoint modules
npm run generate:migration-map
```

### Regenerating

`src/endpoints/v2/` and `migration/` are generated and marked as such. To pick up weclapp API
changes, refresh `apidoc/weclapp-openapi-v1.yaml` / `apidoc/weclapp-openapi-v2.yaml` and rerun
both generators. `scripts/generate-migration-map.js` also validates its hand-curated rename and
rewrite tables against the specs on every run and fails loudly if one has gone stale.

### Tests

Tests use mocha (5s timeout) and chai, in two groups:

- **Offline** (`test/version.test.js`) — mocks `axios` to assert URL construction, version
  routing, the endpoint surface of each version, and binary handling. Always runs.
- **Smoke** (`test/test.js`) — hits a real tenant using `WECLAPP_TENANT` and `WECLAPP_APIKEY`
  from the environment, exercising both v1 and v2. Skips itself when either is unset, so a
  clean checkout is green (11 passing, 2 pending).

Run a single suite with mocha's `--grep`, using one of `version routing`, `endpoint surface`,
`binary responses` or `smoke`:

```bash
npx mocha --timeout 5000 --grep "version routing"
```

## License
This project is available under the [MIT](https://choosealicense.com/licenses/mit/) license.
