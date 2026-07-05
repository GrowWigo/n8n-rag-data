# Node: AWS SNS

**Name**: awsSns
**Category**: output
**Description**: Sends data to AWS SNS
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
  - Option: AWS (IAM) (value: iam)
  - Option: AWS (Assume Role) (value: assumeRole)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Publish (value: publish)
- **name** (string): Name
- **options** (collection): Options
  - Option: displayName (value: undefined)
  - Option: fifoTopic (value: undefined)
- **topic** (resourceLocator): Topic
- **subject** (string): Subject when the message is delivered to email endpoints
- **message** (string): The message you want to send
