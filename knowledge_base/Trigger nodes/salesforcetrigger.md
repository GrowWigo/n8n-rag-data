# Node: Salesforce Trigger

**Name**: salesforceTrigger
**Category**: trigger
**Description**: Fetches data from Salesforce and starts the workflow on specified polling intervals.
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **triggerOn** (options): Which Salesforce event should trigger the node
  - Option: Account Created (value: accountCreated)
  - Option: Account Updated (value: accountUpdated)
  - Option: Attachment Created (value: attachmentCreated)
  - Option: Attachment Updated (value: attachmentUpdated)
  - Option: Case Created (value: caseCreated)
  - Option: Case Updated (value: caseUpdated)
  - Option: Contact Created (value: contactCreated)
  - Option: Contact Updated (value: contactUpdated)
  - Option: Custom Object Created (value: customObjectCreated)
  - Option: Custom Object Updated (value: customObjectUpdated)
  - Option: Lead Created (value: leadCreated)
  - Option: Lead Updated (value: leadUpdated)
  - Option: Opportunity Created (value: opportunityCreated)
  - Option: Opportunity Updated (value: opportunityUpdated)
  - Option: Task Created (value: taskCreated)
  - Option: Task Updated (value: taskUpdated)
  - Option: User Created (value: userCreated)
  - Option: User Updated (value: userUpdated)
- **customObject** (options): Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
