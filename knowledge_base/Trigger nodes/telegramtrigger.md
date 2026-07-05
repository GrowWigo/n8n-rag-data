# Node: Telegram Trigger

**Name**: telegramTrigger
**Category**: trigger
**Description**: Starts the workflow on a Telegram update
**Version**: 1, 1.1, 1.2

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **telegramTriggerNotice** (notice): Due to Telegram API limitations, you can use just one Telegram trigger for each bot at a time
- **updates** (multiOptions): Trigger On
  - Option: * (value: *)
  - Option: Callback Query (value: callback_query)
  - Option: Channel Post (value: channel_post)
  - Option: Edited Channel Post (value: edited_channel_post)
  - Option: Edited Message (value: edited_message)
  - Option: Inline Query (value: inline_query)
  - Option: Message (value: message)
  - Option: Poll (value: poll)
  - Option: Pre-Checkout Query (value: pre_checkout_query)
  - Option: Shipping Query (value: shipping_query)
- **attachmentNotice** (notice): Every uploaded attachment, even if sent in a group, will trigger a separate event. You can identify that an attachment belongs to a certain group by <code>media_group_id</code> .
- **additionalFields** (collection): Additional Fields
  - Option: download (value: undefined)
  - Option: imageSize (value: undefined)
  - Option: chatIds (value: undefined)
  - Option: userIds (value: undefined)
