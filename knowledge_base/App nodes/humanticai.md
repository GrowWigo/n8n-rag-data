# Node: Humantic AI

**Name**: humanticAi
**Category**: output
**Description**: Consume Humantic AI API
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
  - Option: Profile (value: profile)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Update (value: update)
- **userId** (string): The LinkedIn profile URL or email ID for creating a Humantic profile. If you are sending the resume, this should be a unique string.
- **sendResume** (boolean): Whether to send a resume for a resume based analysis
- **binaryPropertyName** (string): Input Binary Field
- **userId** (string): This value is the same as the User ID that was provided when the analysis was created. This could be a LinkedIn URL, email ID, or a unique string in case of resume based analysis.
- **options** (collection): Options
  - Option: persona (value: undefined)
- **userId** (string): This value is the same as the User ID that was provided when the analysis was created. Currently only supported for profiles created using LinkedIn URL.
- **sendResume** (boolean): Whether to send a resume for a resume of the user
- **text** (string): Additional text written by the user
- **binaryPropertyName** (string): Input Binary Field
