# Node: Gong

**Name**: gong
**Category**: transform
**Description**: Interact with Gong API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Call (value: call)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **call** (resourceLocator): Call to Get
- **options** (collection): Options
  - Option: properties (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: fromDateTime (value: undefined)
  - Option: toDateTime (value: undefined)
  - Option: workspaceId (value: undefined)
  - Option: callIds (value: undefined)
  - Option: primaryUserIds (value: undefined)
- **options** (collection): Options
  - Option: properties (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **user** (resourceLocator): User to Get
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: createdFromDateTime (value: undefined)
  - Option: createdToDateTime (value: undefined)
  - Option: userIds (value: undefined)
