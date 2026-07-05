# Node: Ghost

**Name**: ghost
**Category**: input
**Description**: Consume Ghost API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **source** (options): Pick where your data comes from, Content or Admin API
  - Option: Admin API (value: adminApi)
  - Option: Content API (value: contentApi)
- **resource** (options): Resource
  - Option: Post (value: post)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): Post's title
- **contentFormat** (options): The format of the post
  - Option: HTML (value: html)
  - Option: Mobile Doc (value: mobileDoc)
  - Option: Lexical (value: lexical)
- **content** (string): The content of the post to create
- **content** (json): Mobiledoc is the raw JSON format that Ghost uses to store post contents. <a href="https://ghost.org/docs/concepts/posts/#document-storage">Info</a>.
- **content** (json): Lexical is the JSON format returned by the Ghost Default editor
- **additionalFields** (collection): Additional Fields
  - Option: authors (value: undefined)
  - Option: canonical_url (value: undefined)
  - Option: codeinjection_foot (value: undefined)
  - Option: codeinjection_head (value: undefined)
  - Option: featured (value: undefined)
  - Option: meta_description (value: undefined)
  - Option: meta_title (value: undefined)
  - Option: og_description (value: undefined)
  - Option: og_image (value: undefined)
  - Option: og_title (value: undefined)
  - Option: published_at (value: undefined)
  - Option: slug (value: undefined)
  - Option: status (value: undefined)
  - Option: tags (value: undefined)
  - Option: twitter_description (value: undefined)
  - Option: twitter_image (value: undefined)
  - Option: twitter_title (value: undefined)
- **postId** (string): The ID of the post to delete
- **by** (options): Get the post either by slug or ID
  - Option: ID (value: id)
  - Option: Slug (value: slug)
- **identifier** (string): The ID or slug of the post to get
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: formats (value: undefined)
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: formats (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: include (value: undefined)
  - Option: fields (value: undefined)
  - Option: formats (value: undefined)
- **options** (collection): Options
  - Option: include (value: undefined)
  - Option: fields (value: undefined)
  - Option: formats (value: undefined)
- **postId** (string): The ID of the post to update
- **contentFormat** (options): The format of the post
  - Option: HTML (value: html)
  - Option: Mobile Doc (value: mobileDoc)
  - Option: Lexical (value: lexical)
- **updateFields** (collection): Update Fields
  - Option: authors (value: undefined)
  - Option: canonical_url (value: undefined)
  - Option: codeinjection_foot (value: undefined)
  - Option: codeinjection_head (value: undefined)
  - Option: content (value: undefined)
  - Option: contentJson (value: undefined)
  - Option: contentJson (value: undefined)
  - Option: featured (value: undefined)
  - Option: meta_description (value: undefined)
  - Option: meta_title (value: undefined)
  - Option: og_description (value: undefined)
  - Option: og_image (value: undefined)
  - Option: og_title (value: undefined)
  - Option: published_at (value: undefined)
  - Option: slug (value: undefined)
  - Option: status (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
  - Option: twitter_description (value: undefined)
  - Option: twitter_image (value: undefined)
  - Option: twitter_title (value: undefined)
