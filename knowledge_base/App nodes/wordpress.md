# Node: Wordpress

**Name**: wordpress
**Category**: output
**Description**: Consume Wordpress API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authType** (options): The authentication method to use
  - Option: Basic Auth (value: basicAuth)
  - Option: OAuth2 (WordPress.com) (value: oAuth2)
- **resource** (options): Resource
  - Option: Post (value: post)
  - Option: Page (value: page)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): The title for the post
- **additionalFields** (collection): Additional Fields
  - Option: authorId (value: undefined)
  - Option: content (value: undefined)
  - Option: slug (value: undefined)
  - Option: password (value: undefined)
  - Option: status (value: undefined)
  - Option: date (value: undefined)
  - Option: commentStatus (value: undefined)
  - Option: pingStatus (value: undefined)
  - Option: format (value: undefined)
  - Option: sticky (value: undefined)
  - Option: categories (value: undefined)
  - Option: tags (value: undefined)
  - Option: postTemplate (value: undefined)
- **postId** (string): Unique identifier for the object
- **updateFields** (collection): Update Fields
  - Option: authorId (value: undefined)
  - Option: title (value: undefined)
  - Option: content (value: undefined)
  - Option: slug (value: undefined)
  - Option: password (value: undefined)
  - Option: status (value: undefined)
  - Option: date (value: undefined)
  - Option: commentStatus (value: undefined)
  - Option: pingStatus (value: undefined)
  - Option: format (value: undefined)
  - Option: sticky (value: undefined)
  - Option: categories (value: undefined)
  - Option: tags (value: undefined)
  - Option: postTemplate (value: undefined)
- **postId** (string): Unique identifier for the object
- **options** (collection): Options
  - Option: password (value: undefined)
  - Option: context (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: after (value: undefined)
  - Option: author (value: undefined)
  - Option: before (value: undefined)
  - Option: categories (value: undefined)
  - Option: context (value: undefined)
  - Option: excludedCategories (value: undefined)
  - Option: excludedTags (value: undefined)
  - Option: order (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: search (value: undefined)
  - Option: status (value: undefined)
  - Option: sticky (value: undefined)
  - Option: tags (value: undefined)
- **postId** (string): Unique identifier for the object
- **options** (collection): Options
  - Option: force (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): The title for the page
- **additionalFields** (collection): Additional Fields
  - Option: authorId (value: undefined)
  - Option: parent (value: undefined)
  - Option: content (value: undefined)
  - Option: slug (value: undefined)
  - Option: password (value: undefined)
  - Option: status (value: undefined)
  - Option: commentStatus (value: undefined)
  - Option: pingStatus (value: undefined)
  - Option: pageTemplate (value: undefined)
  - Option: menuOrder (value: undefined)
  - Option: featuredMediaId (value: undefined)
- **pageId** (string): Unique identifier for the object
- **updateFields** (collection): Update Fields
  - Option: authorId (value: undefined)
  - Option: parent (value: undefined)
  - Option: title (value: undefined)
  - Option: content (value: undefined)
  - Option: slug (value: undefined)
  - Option: password (value: undefined)
  - Option: status (value: undefined)
  - Option: commentStatus (value: undefined)
  - Option: pingStatus (value: undefined)
  - Option: pageTemplate (value: undefined)
  - Option: menuOrder (value: undefined)
  - Option: commentStatus (value: undefined)
  - Option: featuredMediaId (value: undefined)
- **pageId** (string): Unique identifier for the object
- **options** (collection): Options
  - Option: password (value: undefined)
  - Option: context (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: after (value: undefined)
  - Option: author (value: undefined)
  - Option: before (value: undefined)
  - Option: context (value: undefined)
  - Option: menuOrder (value: undefined)
  - Option: order (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: page (value: undefined)
  - Option: parent (value: undefined)
  - Option: search (value: undefined)
  - Option: status (value: undefined)
- **pageId** (string): Unique identifier for the object
- **options** (collection): Options
  - Option: force (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **username** (string): Login name for the user
- **name** (string): Display name for the user
- **firstName** (string): First name for the user
- **lastName** (string): Last name for the user
- **email** (string): The email address for the user
- **password** (string): Password for the user (never included)
- **additionalFields** (collection): Additional Fields
  - Option: url (value: undefined)
  - Option: description (value: undefined)
  - Option: nickname (value: undefined)
  - Option: slug (value: undefined)
- **userId** (string): Unique identifier for the user
- **updateFields** (collection): Update Fields
  - Option: username (value: undefined)
  - Option: name (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: email (value: undefined)
  - Option: password (value: undefined)
  - Option: url (value: undefined)
  - Option: description (value: undefined)
  - Option: nickname (value: undefined)
  - Option: slug (value: undefined)
- **userId** (string): Unique identifier for the user
- **options** (collection): Options
  - Option: context (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: context (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: order (value: undefined)
  - Option: search (value: undefined)
  - Option: who (value: undefined)
- **reassign** (string): Reassign the deleted user's posts and links to this user ID
