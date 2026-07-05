# Node: Wait

**Name**: wait
**Category**: organization
**Description**: Wait before continue with execution
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resume** (options): Determines the waiting mode to use before the workflow continues
  - Option: After Time Interval (value: timeInterval)
  - Option: At Specified Time (value: specificTime)
  - Option: On Webhook Call (value: webhook)
  - Option: On Form Submitted (value: form)
- **incomingAuthentication** (options): If and how incoming resume-webhook-requests to $execution.resumeFormUrl should be authenticated for additional security
  - Option: Basic Auth (value: basicAuth)
  - Option: None (value: none)
- **incomingAuthentication** (options): If and how incoming resume-webhook-requests to $execution.resumeUrl should be authenticated for additional security
  - Option: Basic Auth (value: basicAuth)
  - Option: Header Auth (value: headerAuth)
  - Option: JWT Auth (value: jwtAuth)
  - Option: None (value: none)
- **dateTime** (dateTime): The date and time to wait for before continuing
- **amount** (number): The time to wait
- **amount** (number): The time to wait
- **unit** (options): The time unit of the Wait Amount value
  - Option: Seconds (value: seconds)
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
  - Option: Days (value: days)
- **unit** (options): The time unit of the Wait Amount value
  - Option: Seconds (value: seconds)
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
  - Option: Days (value: days)
- **webhookNotice** (notice): The webhook URL will be generated at run time. It can be referenced with the <strong>$execution.resumeUrl</strong> variable. Send it somewhere before getting to this node. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.wait" target="_blank">More info</a>
- **formNotice** (notice): The form url will be generated at run time. It can be referenced with the <strong>$execution.resumeFormUrl</strong> variable. Send it somewhere before getting to this node. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.wait" target="_blank">More info</a>
- **formTitle** (string): Shown at the top of the form
- **formDescription** (string): Shown underneath the Form Title. Can be used to prompt the user on how to complete the form. Accepts HTML. Does not accept <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> or <code>&lt;input&gt;</code> tags.
- **formFields** (fixedCollection): Form Elements
  - Option: values (value: undefined)
- **responseMode** (options): When to respond to the form submission
  - Option: Form Is Submitted (value: onReceived)
  - Option: Workflow Finishes (value: lastNode)
  - Option: Using 'Respond to Webhook' Node (value: responseNode)
- **httpMethod** (options): The HTTP method of the Webhook call
  - Option: DELETE (value: DELETE)
  - Option: GET (value: GET)
  - Option: HEAD (value: HEAD)
  - Option: PATCH (value: PATCH)
  - Option: POST (value: POST)
  - Option: PUT (value: PUT)
- **responseCode** (number): The HTTP Response code to return
- **responseMode** (options): When and how to respond to the webhook
  - Option: Immediately (value: onReceived)
  - Option: When Last Node Finishes (value: lastNode)
  - Option: Using 'Respond to Webhook' Node (value: responseNode)
- **responseData** (options): What data should be returned. If it should return all items as an array or only the first item as object.
  - Option: All Entries (value: allEntries)
  - Option: First Entry JSON (value: firstEntryJson)
  - Option: First Entry Binary (value: firstEntryBinary)
  - Option: No Response Body (value: noData)
- **responseBinaryPropertyName** (string): Name of the binary property to return
- **limitWaitTime** (boolean): Whether to limit the time this node should wait for a user response before execution resumes
- **limitType** (options): Sets the condition for the execution to resume. Can be a specified date or after some time.
  - Option: After Time Interval (value: afterTimeInterval)
  - Option: At Specified Time (value: atSpecifiedTime)
- **resumeAmount** (number): The time to wait
- **resumeUnit** (options): Unit of the interval value
  - Option: Seconds (value: seconds)
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
  - Option: Days (value: days)
- **maxDateAndTime** (dateTime): Continue execution after the specified date and time
- **options** (collection): Options
  - Option: binaryData (value: undefined)
  - Option: binaryPropertyName (value: undefined)
  - Option: binaryPropertyName (value: undefined)
  - Option: ignoreBots (value: undefined)
  - Option: ipWhitelist (value: undefined)
  - Option: noResponseBody (value: undefined)
  - Option: rawBody (value: undefined)
  - Option: rawBody (value: undefined)
  - Option: responseData (value: undefined)
  - Option: responseContentType (value: undefined)
  - Option: responseHeaders (value: undefined)
  - Option: responsePropertyName (value: undefined)
  - Option: webhookSuffix (value: undefined)
- **options** (collection): Options
  - Option: appendAttribution (value: undefined)
  - Option: respondWithOptions (value: undefined)
  - Option: webhookSuffix (value: undefined)
- **options** (collection): Options
  - Option: appendAttribution (value: undefined)
  - Option: webhookSuffix (value: undefined)
