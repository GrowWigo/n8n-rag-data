# Node: UptimeRobot

**Name**: uptimeRobot
**Category**: output
**Description**: Consume UptimeRobot API
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
  - Option: Account (value: account)
  - Option: Alert Contact (value: alertContact)
  - Option: Maintenance Window (value: maintenanceWindow)
  - Option: Monitor (value: monitor)
  - Option: Public Status Page (value: publicStatusPage)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Reset (value: reset)
  - Option: Update (value: update)
- **friendlyName** (string): The friendly name of the monitor
- **type** (options): The type of the monitor
  - Option: Heartbeat (value: 5)
  - Option: HTTP(S) (value: 1)
  - Option: Keyword (value: 2)
  - Option: Ping (value: 3)
  - Option: Port (value: 4)
- **url** (string): The URL/IP of the monitor
- **id** (string): The ID of the monitor
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: alert_contacts (value: undefined)
  - Option: logs (value: undefined)
  - Option: mwindow (value: undefined)
  - Option: monitors (value: undefined)
  - Option: response_times (value: undefined)
  - Option: search (value: undefined)
  - Option: statuses (value: undefined)
  - Option: types (value: undefined)
- **id** (string): The ID of the monitor
- **updateFields** (collection): Update Fields
  - Option: friendly_name (value: undefined)
  - Option: http_auth_type (value: undefined)
  - Option: http_method (value: undefined)
  - Option: http_password (value: undefined)
  - Option: http_username (value: undefined)
  - Option: interval (value: undefined)
  - Option: port (value: undefined)
  - Option: status (value: undefined)
  - Option: sub_type (value: undefined)
  - Option: url (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **friendlyName** (string): The friendly name of the alert contact
- **type** (options): The type of the alert contact
  - Option: Boxcar (value: 4)
  - Option: E-Mail (value: 2)
  - Option: Pushbullet (value: 6)
  - Option: Pushover (value: 9)
  - Option: SMS (value: 1)
  - Option: Twitter DM (value: 3)
  - Option: Webhook (value: 5)
- **value** (string): The correspondent value for the alert contact type
- **id** (string): The ID of the alert contact
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: alert_contacts (value: undefined)
- **id** (string): The ID of the alert contact
- **updateFields** (collection): Update Fields
  - Option: friendly_name (value: undefined)
  - Option: value (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **duration** (number): The maintenance window activation period (minutes)
- **friendlyName** (string): The friendly name of the maintenance window
- **type** (options): The type of the maintenance window
  - Option: Once (value: 1)
  - Option: Daily (value: 2)
  - Option: Weekly (value: 3)
  - Option: Monthly (value: 4)
- **weekDay** (options): Week Day
  - Option: Monday (value: 1)
  - Option: Tuesday (value: 2)
  - Option: Wednesday (value: 3)
  - Option: Thursday (value: 4)
  - Option: Friday (value: 5)
  - Option: Saturday (value: 6)
  - Option: Sunday (value: 7)
- **monthDay** (number): Month Day
- **start_time** (dateTime): The maintenance window start datetime
- **id** (string): The ID of the maintenance window
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: mwindow (value: undefined)
- **id** (string): The ID of the maintenance window
- **duration** (number): The maintenance window activation period (minutes)
- **updateFields** (collection): Update Fields
  - Option: friendly_name (value: undefined)
  - Option: start_time (value: undefined)
  - Option: type (value: undefined)
  - Option: weekDay (value: undefined)
  - Option: monthDay (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **friendlyName** (string): The friendly name of the status page
- **monitors** (string): Monitor IDs to be displayed in status page (the values are separated with a dash (-) or 0 for all monitors)
- **additionalFields** (collection): Additional Fields
  - Option: custom_domain (value: undefined)
  - Option: password (value: undefined)
  - Option: sort (value: undefined)
- **id** (string): The ID of the public status page
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: psps (value: undefined)
- **id** (string): The ID of the public status page
- **updateFields** (collection): Update Fields
  - Option: custom_domain (value: undefined)
  - Option: friendly_name (value: undefined)
  - Option: monitors (value: undefined)
  - Option: password (value: undefined)
  - Option: sort (value: undefined)
