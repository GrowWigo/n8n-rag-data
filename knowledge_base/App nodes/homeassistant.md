# Node: Home Assistant

**Name**: homeAssistant
**Category**: output
**Description**: Consume Home Assistant API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Camera Proxy (value: cameraProxy)
  - Option: Config (value: config)
  - Option: Event (value: event)
  - Option: Log (value: log)
  - Option: Service (value: service)
  - Option: State (value: state)
  - Option: Template (value: template)
- **operation** (options): Operation
  - Option: Get Screenshot (value: getScreenshot)
- **cameraEntityId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **binaryPropertyName** (string): Put Output File in Field
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Check Configuration (value: check)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **eventType** (string): The Entity ID for which an event will be created
- **eventAttributes** (fixedCollection): Event Attributes
  - Option: attributes (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: endTime (value: undefined)
  - Option: entityIds (value: undefined)
  - Option: minimalResponse (value: undefined)
  - Option: significantChangesOnly (value: undefined)
  - Option: startTime (value: undefined)
- **operation** (options): Operation
  - Option: Get Error Logs (value: getErroLogs)
  - Option: Get Logbook Entries (value: getLogbookEntries)
- **additionalFields** (collection): Additional Fields
  - Option: endTime (value: undefined)
  - Option: entityId (value: undefined)
  - Option: startTime (value: undefined)
- **operation** (options): Operation
  - Option: Call (value: call)
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **domain** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **service** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **serviceAttributes** (fixedCollection): Service Attributes
  - Option: attributes (value: undefined)
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **entityId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **entityId** (options): The entity ID for which a state will be created. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **state** (string): State
- **stateAttributes** (fixedCollection): State Attributes
  - Option: attributes (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **template** (string): Render a Home Assistant template. <a href="https://www.home-assistant.io/docs/configuration/templating/">See template docs for more information.</a>.
