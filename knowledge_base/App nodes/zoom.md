# Node: Zoom

**Name**: zoom
**Category**: input
**Description**: Consume Zoom API
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Meeting (value: meeting)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **topic** (string): Topic of the meeting
- **additionalFields** (collection): Additional Fields
  - Option: agenda (value: undefined)
  - Option: duration (value: undefined)
  - Option: password (value: undefined)
  - Option: scheduleFor (value: undefined)
  - Option: settings (value: undefined)
  - Option: startTime (value: undefined)
  - Option: timeZone (value: undefined)
  - Option: type (value: undefined)
- **meetingId** (string): Meeting ID
- **additionalFields** (collection): Additional Fields
  - Option: occurrenceId (value: undefined)
  - Option: showPreviousOccurrences (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: type (value: undefined)
- **meetingId** (string): Meeting ID
- **additionalFields** (collection): Additional Fields
  - Option: occurrenceId (value: undefined)
  - Option: scheduleForReminder (value: undefined)
- **meetingId** (string): Meeting ID
- **updateFields** (collection): Update Fields
  - Option: agenda (value: undefined)
  - Option: duration (value: undefined)
  - Option: password (value: undefined)
  - Option: scheduleFor (value: undefined)
  - Option: settings (value: undefined)
  - Option: startTime (value: undefined)
  - Option: timeZone (value: undefined)
  - Option: topic (value: undefined)
  - Option: type (value: undefined)
