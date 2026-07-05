# Node: Orbit

**Name**: orbit
**Category**: output
**Description**: Consume Orbit API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **deprecated** (notice): Orbit has been shutdown and will no longer function from July 11th, You can read more <a target="_blank" href="https://orbit.love/blog/orbit-is-joining-postman">here</a>.
- **resource** (options): Resource
  - Option: Activity (value: activity)
  - Option: Member (value: member)
  - Option: Note (value: note)
  - Option: Post (value: post)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **title** (string): Title
- **additionalFields** (collection): Additional Fields
  - Option: activityType (value: undefined)
  - Option: description (value: undefined)
  - Option: key (value: undefined)
  - Option: link (value: undefined)
  - Option: linkText (value: undefined)
  - Option: occurredAt (value: undefined)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: memberId (value: undefined)
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Lookup (value: lookup)
  - Option: Update (value: update)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **resolveIdentities** (boolean): By default, the response just includes the reference of the identity. When set to true the identities will be resolved automatically.
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **resolveIdentities** (boolean): By default, the response just includes the reference of the identity. When set to true the identities will be resolved automatically.
- **options** (collection): Options
  - Option: sort (value: undefined)
  - Option: direction (value: undefined)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **source** (options): Set to github, twitter, email, discourse or the source of any identities you've manually created
  - Option: Discourse (value: discourse)
  - Option: Email (value: email)
  - Option: GitHub (value: github)
  - Option: Twitter (value: twitter)
- **searchBy** (options): Search By
  - Option: Username (value: username)
  - Option: ID (value: id)
- **id** (string): The username at the source
- **username** (string): The username at the source
- **email** (string): The email address
- **host** (string): Host
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **updateFields** (collection): Update Fields
  - Option: bio (value: undefined)
  - Option: birthday (value: undefined)
  - Option: company (value: undefined)
  - Option: location (value: undefined)
  - Option: name (value: undefined)
  - Option: pronouns (value: undefined)
  - Option: shippingAddress (value: undefined)
  - Option: slug (value: undefined)
  - Option: tagsToAdd (value: undefined)
  - Option: tagList (value: undefined)
  - Option: tShirt (value: undefined)
  - Option: teammate (value: undefined)
  - Option: url (value: undefined)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **identityUi** (fixedCollection): The identity is used to find the member. If no member exists, a new member will be created and linked to the provided identity.
  - Option: identityValue (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: bio (value: undefined)
  - Option: birthday (value: undefined)
  - Option: company (value: undefined)
  - Option: location (value: undefined)
  - Option: name (value: undefined)
  - Option: pronouns (value: undefined)
  - Option: shippingAddress (value: undefined)
  - Option: slug (value: undefined)
  - Option: tagsToAdd (value: undefined)
  - Option: tagList (value: undefined)
  - Option: tShirt (value: undefined)
  - Option: teammate (value: undefined)
  - Option: url (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **note** (string): Note
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **resolveMember** (boolean): Resolve Member
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **noteId** (string): Note ID
- **note** (string): Note
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
  - Option: Delete (value: delete)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **url** (string): Supply any URL and Orbit will do its best job to parse out a title, description, and image
- **additionalFields** (collection): Additional Fields
  - Option: publishedAt (value: undefined)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: memberId (value: undefined)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **memberId** (string): Member ID
- **postId** (string): Post ID
