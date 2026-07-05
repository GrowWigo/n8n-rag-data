# Node: Bitbucket Trigger

**Name**: bitbucketTrigger
**Category**: trigger
**Description**: Handle Bitbucket events via webhooks
**Version**: 1, 1.1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Password (Deprecated) (value: password)
  - Option: Access Token (value: accessToken)
- **authentication** (options): Authentication
  - Option: Password (Deprecated) (value: password)
  - Option: Access Token (value: accessToken)
- **resource** (options): Resource
  - Option: Repository (value: repository)
  - Option: Workspace (value: workspace)
- **workspace** (options): The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **events** (multiOptions): The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **repository** (options): The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **events** (multiOptions): The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
