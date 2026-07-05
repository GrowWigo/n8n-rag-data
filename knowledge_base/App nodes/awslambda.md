# Node: AWS Lambda

**Name**: awsLambda
**Category**: output
**Description**: Invoke functions on AWS Lambda
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
  - Option: Invoke (value: invoke)
- **function** (options): The function you want to invoke. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **qualifier** (string): Specify a version or alias to invoke a published version of the function
- **invocationType** (options): Specify if the workflow should wait for the function to return the results
  - Option: Wait for Results (value: RequestResponse)
  - Option: Continue Workflow (value: Event)
- **payload** (string): The JSON that you want to provide to your Lambda function as input
