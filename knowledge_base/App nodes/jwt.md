# Node: JWT

**Name**: jwt
**Category**: transform
**Description**: JWT
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
  - Option: Decode (value: decode)
  - Option: Sign (value: sign)
  - Option: Verify (value: verify)
- **useJson** (boolean): Whether to use JSON to build the claims
- **claims** (collection): Payload Claims
  - Option: audience (value: undefined)
  - Option: expiresIn (value: undefined)
  - Option: issuer (value: undefined)
  - Option: jwtid (value: undefined)
  - Option: notBefore (value: undefined)
  - Option: subject (value: undefined)
- **claimsJson** (json): Claims to add to the token in JSON format
- **token** (string): The token to verify or decode
- **options** (collection): Options
  - Option: complete (value: undefined)
  - Option: ignoreExpiration (value: undefined)
  - Option: ignoreNotBefore (value: undefined)
  - Option: clockTolerance (value: undefined)
  - Option: kid (value: undefined)
  - Option: algorithm (value: undefined)
