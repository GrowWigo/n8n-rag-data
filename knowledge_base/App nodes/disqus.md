# Node: Disqus

**Name**: disqus
**Category**: input
**Description**: Access data on Disqus
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
  - Option: Forum (value: forum)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get All Categories (value: getCategories)
  - Option: Get All Threads (value: getThreads)
  - Option: Get All Posts (value: getPosts)
- **id** (string): The short name(aka ID) of the forum to get
- **additionalFields** (collection): Additional Fields
  - Option: attach (value: undefined)
  - Option: related (value: undefined)
- **id** (string): The short name(aka ID) of the forum to get
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: filters (value: undefined)
  - Option: include (value: undefined)
  - Option: order (value: undefined)
  - Option: query (value: undefined)
  - Option: related (value: undefined)
  - Option: since (value: undefined)
- **id** (string): The short name(aka ID) of the forum to get Categories
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: order (value: undefined)
- **id** (string): The short name(aka ID) of the forum to get Threads
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: related (value: undefined)
  - Option: include (value: undefined)
  - Option: order (value: undefined)
  - Option: since (value: undefined)
  - Option: thread (value: undefined)
