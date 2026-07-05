# Node: PostHog

**Name**: postHog
**Category**: input
**Description**: Consume PostHog API
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
  - Option: Alias (value: alias)
  - Option: Event (value: event)
  - Option: Identity (value: identity)
  - Option: Track (value: track)
- **operation** (options): Operation
  - Option: Create (value: create)
- **alias** (string): The name of the alias
- **distinctId** (string): The user's distinct ID
- **additionalFields** (collection): Additional Fields
  - Option: contextUi (value: undefined)
  - Option: timestamp (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **eventName** (string): The name of the event
- **distinctId** (string): The user's distinct ID
- **additionalFields** (collection): Additional Fields
  - Option: propertiesUi (value: undefined)
  - Option: timestamp (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **distinctId** (string): The identity's distinct ID
- **additionalFields** (collection): Additional Fields
  - Option: propertiesUi (value: undefined)
  - Option: messageId (value: undefined)
  - Option: timestamp (value: undefined)
- **operation** (options): Operation
  - Option: Page (value: page)
  - Option: Screen (value: screen)
- **name** (string): Name
- **distinctId** (string): The user's distinct ID
- **additionalFields** (collection): Additional Fields
  - Option: category (value: undefined)
  - Option: contextUi (value: undefined)
  - Option: messageId (value: undefined)
  - Option: propertiesUi (value: undefined)
  - Option: timestamp (value: undefined)
