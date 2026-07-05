# Node: Discourse

**Name**: discourse
**Category**: input
**Description**: Consume Discourse API
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
  - Option: Category (value: category)
  - Option: Group (value: group)
  - Option: Post (value: post)
  - Option: User (value: user)
  - Option: User Group (value: userGroup)
- **operation** (options): Choose an operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the category
- **color** (color): Color of the category
- **textColor** (color): Text color of the category
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **categoryId** (string): ID of the category
- **name** (string): New name of the category
- **updateFields** (collection): Update Fields
  - Option: color (value: undefined)
  - Option: textColor (value: undefined)
- **operation** (options): Choose an operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the group
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **groupId** (string): ID of the group to update
- **name** (string): New name of the group
- **operation** (options): Choose an operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): Title of the post
- **content** (string): Content of the post
- **additionalFields** (collection): Additional Fields
  - Option: category (value: undefined)
  - Option: reply_to_post_number (value: undefined)
  - Option: topic_id (value: undefined)
- **postId** (string): ID of the post
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **postId** (string): ID of the post
- **content** (string): Content of the post. HTML is supported.
- **updateFields** (collection): Update Fields
  - Option: edit_reason (value: undefined)
  - Option: cooked (value: undefined)
- **operation** (options): Choose an operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **name** (string): Name of the user to create
- **email** (string): Email of the user to create
- **username** (string): The username of the user to create
- **password** (string): The password of the user to create
- **additionalFields** (collection): Additional Fields
  - Option: active (value: undefined)
  - Option: approved (value: undefined)
- **by** (options): What to search by
  - Option: Username (value: username)
  - Option: SSO External ID (value: externalId)
- **username** (string): The username of the user to return
- **externalId** (string): Discourse SSO external ID
- **flag** (options): User flags to search for
  - Option: Active (value: active)
  - Option: Blocked (value: blocked)
  - Option: New (value: new)
  - Option: Staff (value: staff)
  - Option: Suspect (value: suspect)
  - Option: Suspended (value: suspended)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: asc (value: undefined)
  - Option: order (value: undefined)
  - Option: showEmails (value: undefined)
  - Option: stats (value: undefined)
- **operation** (options): Choose an operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **usernames** (string): Usernames to add to group. Multiples can be defined separated by comma.
- **groupId** (string): ID of the group
- **usernames** (string): Usernames to remove from group. Multiples can be defined separated by comma.
- **groupId** (string): ID of the group to remove
