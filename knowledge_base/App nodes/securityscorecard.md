# Node: SecurityScorecard

**Name**: securityScorecard
**Category**: transform
**Description**: Consume SecurityScorecard API
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
  - Option: Company (value: company)
  - Option: Industry (value: industry)
  - Option: Invite (value: invite)
  - Option: Portfolio (value: portfolio)
  - Option: Portfolio Company (value: portfolioCompany)
  - Option: Report (value: report)
- **operation** (options): Operation
  - Option: Get Factor Scores (value: getFactor)
  - Option: Get Historical Factor Scores (value: getFactorHistorical)
  - Option: Get Historical Scores (value: getHistoricalScore)
  - Option: Get Information and Scorecard (value: getScorecard)
  - Option: Get Score Plan (value: getScorePlan)
- **scorecardIdentifier** (string): Primary identifier of a company or scorecard, i.e. domain.
- **score** (number): Score target
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **filters** (collection): Filters
  - Option: severity (value: undefined)
  - Option: severity_in (value: undefined)
- **options** (collection): Options
  - Option: date_from (value: undefined)
  - Option: date_to (value: undefined)
  - Option: timing (value: undefined)
- **operation** (options): Operation
  - Option: Get Factor Scores (value: getFactor)
  - Option: Get Historical Factor Scores (value: getFactorHistorical)
  - Option: Get Score (value: getScore)
- **industry** (options): Industry
  - Option: Food (value: food)
  - Option: Healthcare (value: healthcare)
  - Option: Manofacturing (value: manofacturing)
  - Option: Retail (value: retail)
  - Option: Technology (value: technology)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: from (value: undefined)
  - Option: to (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **email** (string): Email
- **firstName** (string): First Name
- **lastName** (string): Last Name
- **message** (string): Message for the invitee
- **additionalFields** (collection): Additional Fields
  - Option: days_to_resolve_issue (value: undefined)
  - Option: domain (value: undefined)
  - Option: grade_to_maintain (value: undefined)
  - Option: is_organization_point_of_contact (value: undefined)
  - Option: issue_desc (value: undefined)
  - Option: issue_title (value: undefined)
  - Option: issue_type (value: undefined)
  - Option: sendme_copy (value: undefined)
  - Option: target_url (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **portfolioId** (string): Portfolio ID
- **name** (string): Name of the portfolio
- **description** (string): Description
- **privacy** (options): Privacy
  - Option: Private (value: private)
  - Option: Shared (value: shared)
  - Option: Team (value: team)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get Many (value: getAll)
  - Option: Remove (value: remove)
- **portfolioId** (string): Portfolio ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: grade (value: undefined)
  - Option: industry (value: undefined)
  - Option: issueType (value: undefined)
  - Option: status (value: undefined)
  - Option: vulnerability (value: undefined)
- **domain** (string): Company's domain name
- **operation** (options): Operation
  - Option: Download (value: download)
  - Option: Generate (value: generate)
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **report** (options): Report
  - Option: Company Detailed (value: detailed)
  - Option: Company Events (value: events-json)
  - Option: Company Issues (value: issues)
  - Option: Company Partnership (value: partnership)
  - Option: Company Summary (value: summary)
  - Option: Full Scorecard (value: full-scorecard-json)
  - Option: Portfolio (value: portfolio)
  - Option: Scorecard Footprint (value: scorecard-footprint)
- **scorecardIdentifier** (string): Primary identifier of a company or scorecard, i.e. domain.
- **portfolioId** (string): Portfolio ID
- **branding** (options): Branding
  - Option: SecurityScorecard (value: securityscorecard)
  - Option: Company and SecurityScorecard (value: company_and_securityscorecard)
  - Option: Company (value: company)
- **date** (dateTime): Date
- **options** (collection): Options
  - Option: format (value: undefined)
- **options** (collection): Options
  - Option: countries (value: undefined)
  - Option: format (value: undefined)
  - Option: ips (value: undefined)
  - Option: subdomains (value: undefined)
- **url** (string): URL to a generated report
- **binaryPropertyName** (string): Put Output File in Field
