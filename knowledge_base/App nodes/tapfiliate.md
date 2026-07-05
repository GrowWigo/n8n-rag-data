# Node: Tapfiliate

**Name**: tapfiliate
**Category**: transform
**Description**: Consume Tapfiliate API
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
  - Option: Affiliate (value: affiliate)
  - Option: Affiliate Metadata (value: affiliateMetadata)
  - Option: Program Affiliate (value: programAffiliate)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **email** (string): The affiliate’s email
- **firstname** (string): The affiliate’s firstname
- **lastname** (string): The affiliate’s lastname
- **additionalFields** (collection): Additional Fields
  - Option: addressUi (value: undefined)
  - Option: companyName (value: undefined)
- **affiliateId** (string): The ID of the affiliate
- **affiliateId** (string): The ID of the affiliate
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: affiliate_group_id (value: undefined)
  - Option: click_id (value: undefined)
  - Option: email (value: undefined)
  - Option: parentId (value: undefined)
  - Option: referral_code (value: undefined)
  - Option: source_id (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
  - Option: Update (value: update)
- **affiliateId** (string): The ID of the affiliate
- **metadataUi** (fixedCollection): Meta data
  - Option: metadataValues (value: undefined)
- **affiliateId** (string): The ID of the affiliate
- **key** (string): Name of the metadata key to remove
- **affiliateId** (string): The ID of the affiliate
- **key** (string): Name of the metadata key to update
- **value** (string): Value to set for the metadata key
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Approve (value: approve)
  - Option: Disapprove (value: disapprove)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **programId** (options): The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **affiliateId** (string): The ID of the affiliate
- **additionalFields** (collection): Additional Fields
  - Option: approved (value: undefined)
  - Option: coupon (value: undefined)
- **programId** (options): The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **affiliateId** (string): The ID of the affiliate
- **programId** (options): The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **affiliateId** (string): The ID of the affiliate
- **programId** (options): The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **affiliateId** (string): The ID of the affiliate
- **programId** (options): The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: affiliate_group_id (value: undefined)
  - Option: email (value: undefined)
  - Option: parentId (value: undefined)
  - Option: source_id (value: undefined)
