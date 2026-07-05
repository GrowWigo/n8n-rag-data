# Node: KoBoToolbox

**Name**: koBoToolbox
**Category**: transform
**Description**: Work with KoBoToolbox forms and submissions
**Version**: 1

## Common Usecase
This is a Tool node. It gives the AI Agent the ability to perform specific actions like searching the web or reading files.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: File (value: file)
  - Option: Form (value: form)
  - Option: Hook (value: hook)
  - Option: Submission (value: submission)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Redeploy (value: redeploy)
- **formId** (options): Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: sort (value: undefined)
- **filters** (collection): Filters
  - Option: filter (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Logs (value: getLogs)
  - Option: Retry All (value: retryAll)
  - Option: Retry One (value: retryOne)
- **formId** (options): Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **hookId** (string): Hook ID (starts with h, e.g. hVehywQ2oXPYGHJHKtqth4)
- **logId** (string): Hook log ID (starts with hl, e.g. hlSbGKaUKzTVNoWEVMYbLHe)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **status** (options): Only retrieve logs with a specific status
  - Option: All (value: )
  - Option: Failed (value: 0)
  - Option: Pending (value: 1)
  - Option: Success (value: 2)
- **startDate** (dateTime): Minimum date for the hook log to retrieve
- **endDate** (dateTime): Maximum date for the hook log to retrieve
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Validation Status (value: getValidation)
  - Option: Update Validation Status (value: setValidation)
- **formId** (options): Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **submissionId** (string): Submission ID (number, e.g. 245128)
- **validationStatus** (options): Desired Validation Status
  - Option: Approved (value: validation_status_approved)
  - Option: Not Approved (value: validation_status_not_approved)
  - Option: On Hold (value: validation_status_on_hold)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: JSON (value: json)
- **jsonNotice** (notice): See <a href="https://github.com/SEL-Columbia/formhub/wiki/Formhub-Access-Points-(API)#api-parameters" target="_blank">Formhub API docs</a> to creating filters, using the MongoDB JSON format - e.g. {"_submission_time":{"$lt":"2021-10-01T01:02:03"}}
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: download (value: undefined)
  - Option: binaryNamingScheme (value: undefined)
  - Option: dataPropertyAttachmentsPrefixName (value: undefined)
  - Option: fields (value: undefined)
  - Option: version (value: undefined)
  - Option: selectMask (value: undefined)
  - Option: numberMask (value: undefined)
  - Option: reformat (value: undefined)
  - Option: sort (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **formId** (options): Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **fileId** (string): Uid of the file (should start with "af" e.g. "afQoJxA4kmKEXVpkH6SYbhb"
- **binaryPropertyName** (string): Name of the binary property to write the file into
- **download** (boolean): Whether to download the file content into a binary property
- **fileMode** (options): File Upload Mode
  - Option: Binary File (value: binary)
  - Option: URL (value: url)
- **binaryPropertyName** (string): Name of the binary property containing the file to upload. Supported types: image, audio, video, csv, xml, zip.
- **fileUrl** (string): HTTP(s) link to the file to upload
