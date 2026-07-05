# Node: Beeminder

**Name**: beeminder
**Category**: output
**Description**: Consume Beeminder API
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
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Charge (value: charge)
  - Option: Datapoint (value: datapoint)
  - Option: Goal (value: goal)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Create All (value: createAll)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Archived (value: getArchived)
  - Option: Update (value: update)
  - Option: Refresh (value: refresh)
  - Option: Short Circuit (value: shortCircuit)
  - Option: Step Down (value: stepDown)
  - Option: Cancel Step Down (value: cancelStepDown)
  - Option: Uncle (value: uncle)
- **operation** (options): Operation
  - Option: Get (value: get)
- **goalName** (options): The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **goalName** (options): The name of the goal to derail. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **goalName** (options): The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **amount** (number): Charge amount in USD
- **datapoints** (json): Array of datapoint objects to create. Each object should contain value and optionally timestamp, comment, etc.
- **slug** (string): Unique identifier for the goal
- **title** (string): Human-readable title for the goal
- **goal_type** (options): Type of goal. <a href="https://api.beeminder.com/#attributes-2">More info here.</a>.
  - Option: Hustler (value: hustler)
  - Option: Biker (value: biker)
  - Option: Fatloser (value: fatloser)
  - Option: Gainer (value: gainer)
  - Option: Inboxer (value: inboxer)
  - Option: Drinker (value: drinker)
  - Option: Custom (value: custom)
- **gunits** (string): Units for the goal (e.g., "hours", "pages", "pounds")
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **value** (number): Datapoint value to send
- **datapointId** (string): Datapoint ID
- **additionalFields** (collection): Additional Fields
  - Option: comment (value: undefined)
  - Option: timestamp (value: undefined)
  - Option: requestid (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: note (value: undefined)
  - Option: dryrun (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: goaldate (value: undefined)
  - Option: goalval (value: undefined)
  - Option: rate (value: undefined)
  - Option: initval (value: undefined)
  - Option: secret (value: undefined)
  - Option: datapublic (value: undefined)
  - Option: datasource (value: undefined)
  - Option: dryrun (value: undefined)
  - Option: tags (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: title (value: undefined)
  - Option: yaxis (value: undefined)
  - Option: tmin (value: undefined)
  - Option: tmax (value: undefined)
  - Option: secret (value: undefined)
  - Option: datapublic (value: undefined)
  - Option: roadall (value: undefined)
  - Option: datasource (value: undefined)
  - Option: tags (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: datapoints (value: undefined)
  - Option: emaciated (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: associations (value: undefined)
  - Option: diff_since (value: undefined)
  - Option: skinny (value: undefined)
  - Option: emaciated (value: undefined)
  - Option: datapoints_count (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: emaciated (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: emaciated (value: undefined)
- **options** (collection): Options
  - Option: sort (value: undefined)
  - Option: page (value: undefined)
  - Option: per (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: value (value: undefined)
  - Option: comment (value: undefined)
  - Option: timestamp (value: undefined)
