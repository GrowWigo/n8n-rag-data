# Node: AWS SNS Trigger

**Name**: awsSnsTrigger
**Category**: trigger
**Description**: Handle AWS SNS events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: AWS (IAM) (value: iam)
  - Option: AWS (Assume Role) (value: assumeRole)
- **topic** (resourceLocator): Topic
