# Node: SurveyMonkey Trigger

**Name**: surveyMonkeyTrigger
**Category**: trigger
**Description**: Starts the workflow when Survey Monkey events occur
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **objectType** (options): Type
  - Option: Collector (value: collector)
  - Option: Survey (value: survey)
- **event** (options): Event
  - Option: Collector Created (value: collector_created)
  - Option: Collector Deleted (value: collector_deleted)
  - Option: Collector Updated (value: collector_updated)
  - Option: Response Completed (value: response_completed)
  - Option: Response Created (value: response_created)
  - Option: Response Deleted (value: response_deleted)
  - Option: Response Disqualified (value: response_disqualified)
  - Option: Response Overquota (value: response_overquota)
  - Option: Response Updated (value: response_updated)
  - Option: Survey Created (value: survey_created)
  - Option: Survey Deleted (value: survey_deleted)
  - Option: Survey Updated (value: survey_updated)
- **event** (options): Event
  - Option: Collector Deleted (value: collector_deleted)
  - Option: Collector Updated (value: collector_updated)
  - Option: Response Completed (value: response_completed)
  - Option: Response Created (value: response_created)
  - Option: Response Deleted (value: response_deleted)
  - Option: Response Disqualified (value: response_disqualified)
  - Option: Response Overquota (value: response_overquota)
  - Option: Response Updated (value: response_updated)
- **surveyIds** (multiOptions): Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **surveyId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **collectorIds** (multiOptions): Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resolveData** (boolean): By default the webhook-data only contain the IDs. If this option gets activated, it will resolve the data automatically.
- **onlyAnswers** (boolean): Whether to return only the answers of the form and not any of the other data
