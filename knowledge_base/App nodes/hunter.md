# Node: Hunter

**Name**: hunter
**Category**: output
**Description**: Consume Hunter API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation to consume
  - Option: Domain Search (value: domainSearch)
  - Option: Email Finder (value: emailFinder)
  - Option: Email Verifier (value: emailVerifier)
- **domain** (string): Domain name from which you want to find the email addresses. For example, "stripe.com".
- **onlyEmails** (boolean): Whether to return only the found emails
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: type (value: undefined)
  - Option: seniority (value: undefined)
  - Option: department (value: undefined)
- **domain** (string): Domain name from which you want to find the email addresses. For example, "stripe.com".
- **firstname** (string): The person's first name. It doesn't need to be in lowercase.
- **lastname** (string): The person's last name. It doesn't need to be in lowercase.
- **email** (string): The email address you want to verify
