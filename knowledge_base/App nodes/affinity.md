# Node: Affinity

**Name**: affinity
**Category**: output
**Description**: Consume Affinity API
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
  - Option: List (value: list)
  - Option: List Entry (value: listEntry)
  - Option: Organization (value: organization)
  - Option: Person (value: person)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **listId** (string): The unique ID of the list object to be retrieved
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **listId** (options): The unique ID of the list whose list entries are to be retrieved. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **entityId** (string): The unique ID of the entity (person, organization, or opportunity) to add to this list
- **additionalFields** (collection): Additional Fields
  - Option: creator_id (value: undefined)
- **listId** (options): The unique ID of the list that contains the specified list_entry_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listEntryId** (string): The unique ID of the list entry object to be retrieved
- **listId** (options): The unique ID of the list whose list entries are to be retrieved. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **listId** (options): The unique ID of the list that contains the specified list_entry_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listEntryId** (string): The unique ID of the list entry object to be deleted
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): The name of the organization
- **domain** (string): The domain name of the organization
- **additionalFields** (collection): Additional Fields
  - Option: persons (value: undefined)
- **organizationId** (string): Unique identifier for the organization
- **updateFields** (collection): Update Fields
  - Option: domain (value: undefined)
  - Option: name (value: undefined)
  - Option: persons (value: undefined)
- **organizationId** (string): Unique identifier for the organization
- **options** (collection): Options
  - Option: withInteractionDates (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: term (value: undefined)
  - Option: withInteractionDates (value: undefined)
- **organizationId** (string): Unique identifier for the organization
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **firstName** (string): The first name of the person
- **lastName** (string): The last name of the person
- **additionalFields** (collection): Additional Fields
  - Option: organizations (value: undefined)
- **emails** (string): The email addresses of the person
- **personId** (string): Unique identifier for the person
- **updateFields** (collection): Update Fields
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: organizations (value: undefined)
- **emails** (string): The email addresses of the person
- **personId** (string): Unique identifier for the person
- **options** (collection): Options
  - Option: withInteractionDates (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: term (value: undefined)
  - Option: withInteractionDates (value: undefined)
- **personId** (string): Unique identifier for the person
