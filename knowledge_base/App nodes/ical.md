# Node: iCalendar

**Name**: iCal
**Category**: input
**Description**: Create iCalendar file
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Create Event File (value: createEventFile)
- **title** (string): Event Title
- **start** (dateTime): Date and time at which the event begins. (For all-day events, the time will be ignored.).
- **end** (dateTime): Date and time at which the event ends. (For all-day events, the time will be ignored.).
- **allDay** (boolean): Whether the event lasts all day or not
- **binaryPropertyName** (string): The field that your iCalendar file will be available under in the output
- **additionalFields** (collection): Options
  - Option: attendeesUi (value: undefined)
  - Option: busyStatus (value: undefined)
  - Option: calName (value: undefined)
  - Option: description (value: undefined)
  - Option: fileName (value: undefined)
  - Option: geolocationUi (value: undefined)
  - Option: location (value: undefined)
  - Option: recurrenceRule (value: undefined)
  - Option: organizerUi (value: undefined)
  - Option: sequence (value: undefined)
  - Option: status (value: undefined)
  - Option: uid (value: undefined)
  - Option: url (value: undefined)
  - Option: useWorkflowTimezone (value: undefined)
