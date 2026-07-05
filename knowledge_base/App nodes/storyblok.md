# Node: Storyblok

**Name**: storyblok
**Category**: output
**Description**: Consume Storyblok API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **source** (options): Pick where your data comes from, Content or Management API
  - Option: Content API (value: contentApi)
  - Option: Management API (value: managementApi)
- **resource** (options): Resource
  - Option: Story (value: story)
- **resource** (options): Resource
  - Option: Story (value: story)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **identifier** (string): The ID or slug of the story to get
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: starts_with (value: undefined)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Publish (value: publish)
  - Option: Unpublish (value: unpublish)
- **space** (options): The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **storyId** (string): Numeric ID of the story
- **space** (options): The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **storyId** (string): Numeric ID of the story
- **space** (options): The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: starts_with (value: undefined)
- **space** (options): The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **storyId** (string): Numeric ID of the story
- **options** (collection): Options
  - Option: releaseId (value: undefined)
  - Option: language (value: undefined)
- **space** (options): The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **storyId** (string): Numeric ID of the story
