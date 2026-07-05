# Node: Contentful

**Name**: contentful
**Category**: input
**Description**: Consume Contentful API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **source** (options): Pick where your data comes from, delivery or preview API
  - Option: Delivery API (value: deliveryApi)
  - Option: Preview API (value: previewApi)
- **resource** (options): Resource
  - Option: Asset (value: asset)
  - Option: Content Type (value: contentType)
  - Option: Entry (value: entry)
  - Option: Locale (value: locale)
  - Option: Space (value: space)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **environmentId** (string): The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
- **contentTypeId** (string): Content Type ID
- **additionalFields** (collection): Additional Fields
  - Option: rawData (value: undefined)
- **environmentId** (string): The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: content_type (value: undefined)
  - Option: equal (value: undefined)
  - Option: exclude (value: undefined)
  - Option: exist (value: undefined)
  - Option: select (value: undefined)
  - Option: include (value: undefined)
  - Option: notEqual (value: undefined)
  - Option: order (value: undefined)
  - Option: query (value: undefined)
  - Option: rawData (value: undefined)
- **entryId** (string): Entry ID
- **additionalFields** (collection): Additional Fields
  - Option: rawData (value: undefined)
- **environmentId** (string): The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **assetId** (string): Asset ID
- **additionalFields** (collection): Additional Fields
  - Option: equal (value: undefined)
  - Option: exclude (value: undefined)
  - Option: exist (value: undefined)
  - Option: select (value: undefined)
  - Option: include (value: undefined)
  - Option: notEqual (value: undefined)
  - Option: order (value: undefined)
  - Option: query (value: undefined)
  - Option: rawData (value: undefined)
- **environmentId** (string): The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
