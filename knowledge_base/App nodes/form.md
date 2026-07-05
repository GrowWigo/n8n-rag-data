# Node: n8n Form

**Name**: form
**Category**: input
**Description**: Generate webforms in n8n and pass their responses to the workflow
**Version**: 1, 2.3, 2.4, 2.5

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **triggerNotice** (notice): An n8n Form Trigger node must be set up before this node
- **operation** (options): Page Type
  - Option: Next Form Page (value: page)
  - Option: Form Ending (value: completion)
- **defineForm** (options): Define Form
  - Option: Using Fields Below (value: fields)
  - Option: Using JSON (value: json)
- **jsonOutput** (json): Form Fields
- **formFields** (fixedCollection): Form Elements
  - Option: values (value: undefined)
- **formFields** (fixedCollection): Form Elements
  - Option: values (value: undefined)
- **limitWaitTime** (boolean): Whether to limit the time this node should wait for a user response before execution resumes
- **limitType** (options): Sets the condition for the execution to resume. Can be a specified date or after some time.
  - Option: After Time Interval (value: afterTimeInterval)
  - Option: At Specified Time (value: atSpecifiedTime)
- **resumeAmount** (number): The time to wait
- **resumeUnit** (options): Unit of the interval value
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
  - Option: Days (value: days)
- **maxDateAndTime** (dateTime): Continue execution after the specified date and time
- **options** (collection): Options
  - Option: formTitle (value: undefined)
  - Option: formDescription (value: undefined)
  - Option: buttonLabel (value: undefined)
  - Option: customCss (value: undefined)
- **respondWith** (options): On n8n Form Submission
  - Option: Show Completion Screen (value: text)
  - Option: Redirect to URL (value: redirect)
  - Option: Show Text (value: showText)
  - Option: Return Binary File (value: returnBinary)
- **redirectUrl** (string): URL
- **completionTitle** (string): Completion Title
- **completionMessage** (string): Completion Message
- **responseText** (string): The text to display on the page. Use HTML to show a customized web page.
- **inputDataFieldName** (string): Find the name of input field containing the binary data to return in the Input panel on the left, in the Binary tab
- **limitWaitTime** (boolean): Whether to limit the time this node should wait for a user response before execution resumes
- **limitType** (options): Sets the condition for the execution to resume. Can be a specified date or after some time.
  - Option: After Time Interval (value: afterTimeInterval)
  - Option: At Specified Time (value: atSpecifiedTime)
- **resumeAmount** (number): The time to wait
- **resumeUnit** (options): Unit of the interval value
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
  - Option: Days (value: days)
- **maxDateAndTime** (dateTime): Continue execution after the specified date and time
- **options** (collection): Options
  - Option: formTitle (value: undefined)
  - Option: customCss (value: undefined)
