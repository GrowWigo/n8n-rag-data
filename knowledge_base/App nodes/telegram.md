# Node: Telegram

**Name**: telegram
**Category**: output
**Description**: Sends data to Telegram
**Version**: 1, 1.1, 1.2

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Chat (value: chat)
  - Option: Callback (value: callback)
  - Option: File (value: file)
  - Option: Message (value: message)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Administrators (value: administrators)
  - Option: Get Member (value: member)
  - Option: Leave (value: leave)
  - Option: Set Description (value: setDescription)
  - Option: Set Title (value: setTitle)
- **operation** (options): Operation
  - Option: Answer Query (value: answerQuery)
  - Option: Answer Inline Query (value: answerInlineQuery)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Delete Chat Message (value: deleteMessage)
  - Option: Edit Message Text (value: editMessageText)
  - Option: Pin Chat Message (value: pinChatMessage)
  - Option: Send Animation (value: sendAnimation)
  - Option: Send Audio (value: sendAudio)
  - Option: Send Chat Action (value: sendChatAction)
  - Option: Send Document (value: sendDocument)
  - Option: Send Location (value: sendLocation)
  - Option: Send Media Group (value: sendMediaGroup)
  - Option: Send Message (value: sendMessage)
  - Option: Send and Wait for Response (value: sendAndWait)
  - Option: Send Photo (value: sendPhoto)
  - Option: Send Sticker (value: sendSticker)
  - Option: Send Video (value: sendVideo)
  - Option: Unpin Chat Message (value: unpinChatMessage)
- **chatId** (string): Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot
- **messageId** (string): Unique identifier of the message to delete
- **messageId** (string): Unique identifier of the message to pin or unpin
- **additionalFields** (collection): Additional Fields
  - Option: disable_notification (value: undefined)
- **userId** (string): Unique identifier of the target user
- **description** (string): New chat description, 0-255 characters
- **title** (string): New chat title, 1-255 characters
- **queryId** (string): Unique identifier for the query to be answered
- **additionalFields** (collection): Additional Fields
  - Option: cache_time (value: undefined)
  - Option: show_alert (value: undefined)
  - Option: text (value: undefined)
  - Option: url (value: undefined)
- **queryId** (string): Unique identifier for the answered query
- **results** (string): A JSON-serialized array of results for the inline query
- **additionalFields** (collection): Additional Fields
  - Option: cache_time (value: undefined)
  - Option: show_alert (value: undefined)
  - Option: text (value: undefined)
  - Option: url (value: undefined)
- **fileId** (string): The ID of the file
- **download** (boolean): Whether to download the file
- **additionalFields** (collection): Additional Fields
  - Option: mimeType (value: undefined)
- **messageType** (options): The type of the message to edit
  - Option: Inline Message (value: inlineMessage)
  - Option: Message (value: message)
- **chatId** (string): Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot
- **binaryData** (boolean): Whether the data to upload should be taken from binary field
- **binaryPropertyName** (string): Name of the binary property that contains the data to upload
- **messageId** (string): Unique identifier of the message to edit
- **inlineMessageId** (string): Unique identifier of the inline message to edit
- **replyMarkup** (options): Additional interface options
  - Option: None (value: none)
  - Option: Inline Keyboard (value: inlineKeyboard)
- **file** (string): Animation to send. Pass a file_id to send an animation that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get an animation from the Internet.
- **file** (string): Audio file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
- **action** (options): Type of action to broadcast. Choose one, depending on what the user is about to receive. The status is set for 5 seconds or less (when a message arrives from your bot).
  - Option: Find Location (value: find_location)
  - Option: Record Audio (value: record_audio)
  - Option: Record Video (value: record_video)
  - Option: Record Video Note (value: record_video_note)
  - Option: Typing (value: typing)
  - Option: Upload Audio (value: upload_audio)
  - Option: Upload Document (value: upload_document)
  - Option: Upload Photo (value: upload_photo)
  - Option: Upload Video (value: upload_video)
  - Option: Upload Video Note (value: upload_video_note)
- **file** (string): Document to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
- **latitude** (number): Location latitude
- **longitude** (number): Location longitude
- **media** (fixedCollection): The media to add
  - Option: media (value: undefined)
- **text** (string): Text of the message to be sent
- **file** (string): Photo to send. Pass a file_id to send a photo that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a photo from the Internet.
- **file** (string): Sticker to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a .webp file from the Internet.
- **file** (string): Video file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
- **replyMarkup** (options): Additional interface options
  - Option: Force Reply (value: forceReply)
  - Option: Inline Keyboard (value: inlineKeyboard)
  - Option: None (value: none)
  - Option: Reply Keyboard (value: replyKeyboard)
  - Option: Reply Keyboard Remove (value: replyKeyboardRemove)
- **forceReply** (collection): Force Reply
  - Option: force_reply (value: undefined)
  - Option: selective (value: undefined)
- **inlineKeyboard** (fixedCollection): Adds an inline keyboard that appears right next to the message it belongs to
  - Option: rows (value: undefined)
- **replyKeyboard** (fixedCollection): Adds a custom keyboard with reply options
  - Option: rows (value: undefined)
- **replyKeyboardOptions** (collection): Reply Keyboard Options
  - Option: resize_keyboard (value: undefined)
  - Option: one_time_keyboard (value: undefined)
  - Option: selective (value: undefined)
- **replyKeyboardRemove** (collection): Reply Keyboard Remove
  - Option: remove_keyboard (value: undefined)
  - Option: selective (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: appendAttribution (value: undefined)
  - Option: caption (value: undefined)
  - Option: disable_notification (value: undefined)
  - Option: disable_web_page_preview (value: undefined)
  - Option: duration (value: undefined)
  - Option: fileName (value: undefined)
  - Option: height (value: undefined)
  - Option: parse_mode (value: undefined)
  - Option: performer (value: undefined)
  - Option: reply_to_message_id (value: undefined)
  - Option: message_thread_id (value: undefined)
  - Option: title (value: undefined)
  - Option: thumb (value: undefined)
  - Option: width (value: undefined)
- **chatId** (string): Unique identifier for the target chat or username of the target channel (in the format @channelusername). To find your chat ID ask @get_id_bot.
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
