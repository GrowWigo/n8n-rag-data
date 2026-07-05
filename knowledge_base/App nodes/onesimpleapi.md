# Node: One Simple API

**Name**: oneSimpleApi
**Category**: transform
**Description**: A toolbox of no-code utilities
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
  - Option: Information (value: information)
  - Option: Social Profile (value: socialProfile)
  - Option: Utility (value: utility)
  - Option: Website (value: website)
- **operation** (options): Operation
  - Option: Generate PDF (value: pdf)
  - Option: Get SEO Data (value: seo)
  - Option: Take Screenshot (value: screenshot)
- **operation** (options): Operation
  - Option: Instagram (value: instagramProfile)
  - Option: Spotify (value: spotifyArtistProfile)
- **operation** (options): Operation
  - Option: Exchange Rate (value: exchangeRate)
  - Option: Image Metadata (value: imageMetadata)
- **operation** (options): Operation
  - Option: Expand URL (value: expandURL)
  - Option: Generate QR Code (value: qrCode)
  - Option: Validate Email (value: validateEmail)
- **link** (string): Link to webpage to convert
- **download** (boolean): Whether to download the PDF or return a link to it
- **output** (string): The name of the output field to put the binary file data in
- **options** (collection): Options
  - Option: page (value: undefined)
  - Option: force (value: undefined)
- **message** (string): The text that should be turned into a QR code - like a website URL
- **download** (boolean): Whether to download the QR code or return a link to it
- **output** (string): The name of the output field to put the binary file data in
- **options** (collection): Options
  - Option: size (value: undefined)
  - Option: format (value: undefined)
- **link** (string): Link to webpage to convert
- **download** (boolean): Whether to download the screenshot or return a link to it
- **output** (string): The name of the output field to put the binary file data in
- **options** (collection): Options
  - Option: screen (value: undefined)
  - Option: force (value: undefined)
  - Option: fullpage (value: undefined)
- **profileName** (string): Profile name to get details of
- **artistName** (string): Artist name to get details for
- **value** (string): Value to convert
- **fromCurrency** (string): From Currency
- **toCurrency** (string): To Currency
- **link** (string): Image to get metadata from
- **link** (string): Webpage to get SEO information for
- **options** (collection): Options
  - Option: headers (value: undefined)
- **emailAddress** (string): Email Address
- **link** (string): URL to unshorten
