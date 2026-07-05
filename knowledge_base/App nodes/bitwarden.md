# Node: Bitwarden

**Name**: bitwarden
**Category**: transform
**Description**: Consume the Bitwarden API
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
  - Option: Collection (value: collection)
  - Option: Event (value: event)
  - Option: Group (value: group)
  - Option: Member (value: member)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **collectionId** (string): The identifier of the collection
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **updateFields** (collection): Update Fields
  - Option: groups (value: undefined)
  - Option: externalId (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: actingUserId (value: undefined)
  - Option: end (value: undefined)
  - Option: itemID (value: undefined)
  - Option: start (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Members (value: getMembers)
  - Option: Update (value: update)
  - Option: Update Members (value: updateMembers)
- **groupId** (string): The identifier of the group
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **name** (string): The name of the group to create
- **accessAll** (boolean): Whether to allow this group to access all collections within the organization, instead of only its associated collections. If set to true, this option overrides any collection assignments.
- **additionalFields** (collection): Additional Fields
  - Option: collections (value: undefined)
  - Option: externalId (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: accessAll (value: undefined)
  - Option: collections (value: undefined)
  - Option: externalId (value: undefined)
  - Option: name (value: undefined)
- **memberIds** (string): Comma-separated list of IDs of members to set in a group
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Groups (value: getGroups)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
  - Option: Update Groups (value: updateGroups)
- **memberId** (string): The identifier of the member
- **type** (options): Type
  - Option: Owner (value: 0)
  - Option: Admin (value: 1)
  - Option: User (value: 2)
  - Option: Manager (value: 3)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **email** (string): The email of the member to update
- **accessAll** (boolean): Access All
- **additionalFields** (collection): Additional Fields
  - Option: collections (value: undefined)
  - Option: externalId (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: type (value: undefined)
  - Option: collections (value: undefined)
  - Option: externalId (value: undefined)
  - Option: accessAll (value: undefined)
- **groupIds** (string): Comma-separated list of IDs of groups to set for a member
