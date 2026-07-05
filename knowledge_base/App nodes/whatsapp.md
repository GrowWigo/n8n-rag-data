# Node: WhatsApp Business Cloud

**Name**: whatsApp
**Category**: output
**Description**: Access WhatsApp API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Message (value: message)
  - Option: Media (value: media)
- **operation** (options): Operation
  - Option: Send (value: send)
  - Option: Send and Wait for Response (value: sendAndWait)
  - Option: Send Template (value: sendTemplate)
- **messagingProduct** (hidden): Messaging Product
- **phoneNumberId** (options): The ID of the business account's phone number from which the message will be sent from
- **recipientPhoneNumber** (string): Phone number of the recipient of the message
- **messageType** (options): The type of the message
  - Option: Audio (value: audio)
  - Option: Contacts (value: contacts)
  - Option: Document (value: document)
  - Option: Image (value: image)
  - Option: Location (value: location)
  - Option: Text (value: text)
  - Option: Video (value: video)
- **operation** (options): The operation to perform on the media
  - Option: Upload (value: mediaUpload)
  - Option: Download (value: mediaUrlGet)
  - Option: Delete (value: mediaDelete)
- **name** (fixedCollection): Name
  - Option: data (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: addresses (value: undefined)
  - Option: birthday (value: undefined)
  - Option: emails (value: undefined)
  - Option: organization (value: undefined)
  - Option: phones (value: undefined)
  - Option: urls (value: undefined)
- **longitude** (number): Longitude
- **latitude** (number): Latitude
- **additionalFields** (fixedCollection): Additional Fields
  - Option: nameAndAddress (value: undefined)
- **textBody** (string): The body of the message (max 4096 characters)
- **mediaPath** (options): Use a link, an ID, or n8n to upload an audio file
  - Option: Link (value: useMediaLink)
  - Option: WhatsApp Media (value: useMediaId)
  - Option: n8n (value: useMedian8n)
- **mediaPath** (options): Use a link, an ID, or n8n to upload a document
  - Option: Link (value: useMediaLink)
  - Option: WhatsApp Media (value: useMediaId)
  - Option: n8n (value: useMedian8n)
- **mediaPath** (options): Use a link, an ID, or n8n to upload an image
  - Option: Link (value: useMediaLink)
  - Option: WhatsApp Media (value: useMediaId)
  - Option: n8n (value: useMedian8n)
- **mediaPath** (options): Use a link, an ID, or n8n to upload a video
  - Option: Link (value: useMediaLink)
  - Option: WhatsApp Media (value: useMediaId)
  - Option: n8n (value: useMedian8n)
- **mediaLink** (string): Link of the media to be sent
- **mediaId** (string): ID of the media to be sent
- **mediaPropertyName** (string): The name of the input field containing the binary file data to be uploaded
- **mediaFilename** (string): The name of the file (required when using a file ID)
- **additionalFields** (collection): Additional Fields
  - Option: mediaFilename (value: undefined)
  - Option: mediaCaption (value: undefined)
- **template** (options): Name of the template
- **components** (fixedCollection): Components
  - Option: component (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: previewUrl (value: undefined)
- **phoneNumberId** (options): The ID of the business account's phone number to store the media
- **mediaPropertyName** (string): Name of the binary property which contains the data for the file to be uploaded
- **mediaGetId** (string): The ID of the media
- **mediaDeleteId** (string): The ID of the media
- **additionalFields** (collection): Additional Fields
  - Option: mediaFileName (value: undefined)
- **message** (string): Message
- **responseType** (options): Response Type
  - Option: Approval (value: approval)
  - Option: Free Text (value: freeText)
  - Option: Custom Form (value: customForm)
- **defineForm** (options): Define Form
  - Option: Using Fields Below (value: fields)
  - Option: Using JSON (value: json)
- **jsonOutput** (json): Form Fields
- **formFields** (fixedCollection): Form Elements
  - Option: values (value: undefined)
- **formFields** (fixedCollection): Form Elements
  - Option: values (value: undefined)
- **approvalOptions** (fixedCollection): Approval Options
  - Option: values (value: undefined)
- **options** (collection): Options
  - Option: limitWaitTime (value: undefined)
  - Option: appendAttribution (value: undefined)
- **options** (collection): Options
  - Option: messageButtonLabel (value: undefined)
  - Option: responseFormTitle (value: undefined)
  - Option: responseFormDescription (value: undefined)
  - Option: responseFormButtonLabel (value: undefined)
  - Option: responseFormCustomCss (value: undefined)
  - Option: limitWaitTime (value: undefined)
  - Option: appendAttribution (value: undefined)
