# Node: Onfleet Trigger

**Name**: onfleetTrigger
**Category**: trigger
**Description**: Starts the workflow when Onfleet events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **triggerOn** (options): Trigger On
  - Option: SMS Recipient Opt Out (value: SMSRecipientOptOut)
  - Option: SMS Recipient Response Missed (value: smsRecipientResponseMissed)
  - Option: Task Arrival (value: taskArrival)
  - Option: Task Assigned (value: taskAssigned)
  - Option: Task Cloned (value: taskCloned)
  - Option: Task Completed (value: taskCompleted)
  - Option: Task Created (value: taskCreated)
  - Option: Task Delayed (value: taskDelayed)
  - Option: Task Deleted (value: taskDeleted)
  - Option: Task ETA (value: taskEta)
  - Option: Task Failed (value: taskFailed)
  - Option: Task Started (value: taskStarted)
  - Option: Task Unassigned (value: taskUnassigned)
  - Option: Task Updated (value: taskUpdated)
  - Option: Worker Created (value: workerCreated)
  - Option: Worker Deleted (value: workerDeleted)
  - Option: Worker Duty (value: workerDuty)
- **additionalFields** (collection): Additional Fields
  - Option: name (value: undefined)
