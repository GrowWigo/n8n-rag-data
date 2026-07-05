# Node: GoToWebinar

**Name**: goToWebinar
**Category**: transform
**Description**: Consume the GoToWebinar API
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
  - Option: Attendee (value: attendee)
  - Option: Co-Organizer (value: coorganizer)
  - Option: Panelist (value: panelist)
  - Option: Registrant (value: registrant)
  - Option: Session (value: session)
  - Option: Webinar (value: webinar)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Details (value: getDetails)
- **webinarKey** (options): Key of the webinar that the attendee attended. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **sessionKey** (options): Key of the session that the attendee attended. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **registrantKey** (string): Registrant key of the attendee at the webinar session
- **registrantKey** (string): Registrant key of the attendee at the webinar session
- **details** (options): The details to retrieve for the attendee
  - Option: Polls (value: polls)
  - Option: Questions (value: questions)
  - Option: Survey Answers (value: surveyAnswers)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Reinvite (value: reinvite)
- **webinarKey** (options): Key of the webinar that the co-organizer is hosting. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **isExternal** (boolean): Whether the co-organizer has no GoToWebinar account
- **organizerKey** (string): The co-organizer's organizer key for the webinar
- **givenName** (string): The co-organizer's given name
- **email** (string): The co-organizer's email address
- **webinarKey** (options): Key of the webinar to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **coorganizerKey** (string): Key of the co-organizer to delete
- **isExternal** (boolean): By default only internal co-organizers (with a GoToWebinar account) can be deleted. If you want to use this call for external co-organizers you have to set this parameter to 'true'.
- **webinarKey** (options): Key of the webinar to retrieve all co-organizers from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **webinarKey** (string): By default only internal co-organizers (with a GoToWebinar account) can be deleted. If you want to use this call for external co-organizers you have to set this parameter to 'true'.
- **coorganizerKey** (string): Key of the co-organizer to reinvite
- **isExternal** (boolean): Whether the co-organizer has no GoToWebinar account
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Reinvite (value: reinvite)
- **name** (string): Name of the panelist to create
- **email** (string): Email address of the panelist to create
- **webinarKey** (options): Key of the webinar that the panelist will present at. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **webinarKey** (options): Key of the webinar to retrieve all panelists from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **webinarKey** (options): Key of the webinar to delete the panelist from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **panelistKey** (string): Key of the panelist to delete
- **webinarKey** (options): Key of the webinar to reinvite the panelist to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **panelistKey** (string): Key of the panelist to reinvite
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **webinarKey** (options): Key of the webinar of the registrant to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **firstName** (string): First name of the registrant to create
- **lastName** (string): Last name of the registrant to create
- **email** (string): Email address of the registrant to create
- **additionalFields** (collection): Additional Fields
  - Option: fullAddress (value: undefined)
  - Option: industry (value: undefined)
  - Option: jobTitle (value: undefined)
  - Option: multiChoiceResponses (value: undefined)
  - Option: numberOfEmployees (value: undefined)
  - Option: organization (value: undefined)
  - Option: phone (value: undefined)
  - Option: purchasingRole (value: undefined)
  - Option: purchasingTimeFrame (value: undefined)
  - Option: questionsAndComments (value: undefined)
  - Option: resendConfirmation (value: undefined)
  - Option: simpleResponses (value: undefined)
  - Option: source (value: undefined)
- **webinarKey** (options): The key of the webinar to retrieve registrants from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **webinarKey** (options): Key of the webinar of the registrant to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **registrantKey** (string): Key of the registrant to delete
- **webinarKey** (options): Key of the webinar of the registrant to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **registrantKey** (string): Key of the registrant to retrieve
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Details (value: getDetails)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: times (value: undefined)
  - Option: webinarKey (value: undefined)
- **webinarKey** (options): Key of the webinar to which the session belongs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **sessionKey** (string): Session Key
- **details** (options): Details
  - Option: Performance (value: performance)
  - Option: Polls (value: polls)
  - Option: Questions (value: questions)
  - Option: Surveys (value: surveys)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **subject** (string): Subject
- **times** (fixedCollection): Time Range
  - Option: timesProperties (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: experienceType (value: undefined)
  - Option: isOnDemand (value: undefined)
  - Option: isPasswordProtected (value: undefined)
  - Option: timezone (value: undefined)
  - Option: type (value: undefined)
- **webinarKey** (string): Key of the webinar to delete
- **additionalFields** (collection): Additional Fields
  - Option: sendCancellationEmails (value: undefined)
- **webinarKey** (string): Key of the webinar to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: times (value: undefined)
- **webinarKey** (string): Key of the webinar to update
- **notifyParticipants** (boolean): Notify Participants
- **updateFields** (collection): Update Fields
  - Option: description (value: undefined)
  - Option: experienceType (value: undefined)
  - Option: isOnDemand (value: undefined)
  - Option: isPasswordProtected (value: undefined)
  - Option: times (value: undefined)
  - Option: subject (value: undefined)
  - Option: timezone (value: undefined)
  - Option: type (value: undefined)
