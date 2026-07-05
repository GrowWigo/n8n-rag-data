# Node: Airtop

**Name**: airtop
**Category**: transform
**Description**: Scrape and control any site with Airtop
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
  - Option: Agent (value: agent)
  - Option: Extraction (value: extraction)
  - Option: File (value: file)
  - Option: Interaction (value: interaction)
  - Option: Session (value: session)
  - Option: Window (value: window)
- **operation** (options): Operation
  - Option: Run (value: run)
- **agentId** (resourceLocator): The Airtop agent to run. Visit <a href="https://portal.airtop.ai/agents" target="_blank">Airtop Agents</a> for more information.
- **agentParameters** (resourceMapper): Agent Parameters
- **awaitExecution** (boolean): Whether to wait for the agent to complete its execution
- **timeout** (number): Timeout in seconds to wait for the agent to finish
- **operation** (options): Operation
  - Option: Create Session (value: create)
  - Option: Save Profile on Termination (value: save)
  - Option: Terminate Session (value: terminate)
  - Option: Wait for Download (value: waitForDownload)
- **profileName** (string): The name of the Airtop profile to load or create
- **saveProfileOnTermination** (boolean): Whether to automatically save the <a href="https://docs.airtop.ai/guides/how-to/saving-a-profile" target="_blank">Airtop profile</a> for this session upon termination
- **record** (boolean): Whether to record the browser session. <a href="https://docs.airtop.ai/guides/how-to/recording-a-session" target="_blank">More details</a>.
- **timeoutMinutes** (number): Minutes to wait before the session is terminated due to inactivity
- **proxy** (options): Choose how to configure the proxy for this session
  - Option: None (value: none)
  - Option: Integrated (value: integrated)
  - Option: Proxy URL (value: proxyUrl)
- **proxyConfig** (collection): The Airtop-provided configuration to use for the proxy
  - Option: country (value: undefined)
  - Option: sticky (value: undefined)
- **proxyUrl** (string): The URL of the proxy to use
- **additionalFields** (collection): Additional Fields
  - Option: solveCaptcha (value: undefined)
  - Option: extensionIds (value: undefined)
- **notice** (notice): Note: This operation is not needed if you enabled 'Save Profile' in the 'Create Session' operation
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **profileName** (string): The name of the <a href="https://docs.airtop.ai/guides/how-to/saving-a-profile" target="_blank">Profile</a> to save
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **additionalFields** (collection): Additional Fields
  - Option: timeout (value: undefined)
- **operation** (options): Operation
  - Option: Close Window (value: close)
  - Option: Create a New Browser Window (value: create)
  - Option: Get Live View (value: getLiveView)
  - Option: List Windows (value: list)
  - Option: Load URL (value: load)
  - Option: Take Screenshot (value: takeScreenshot)
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **windowId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session#windows" target="_blank">Window</a> to use
- **url** (string): Initial URL to load in the window. Defaults to https://www.google.com.
- **getLiveView** (boolean): Whether to get the URL of the window's <a href="https://docs.airtop.ai/guides/how-to/creating-a-live-view" target="_blank">Live View</a>
- **includeNavigationBar** (boolean): Whether to include the navigation bar in the Live View. When enabled, the navigation bar will be visible allowing you to navigate between pages.
- **screenResolution** (string): The screen resolution of the Live View. Setting a resolution will force the window to open at that specific size.
- **disableResize** (boolean): Whether to disable the window from being resized in the Live View
- **additionalFields** (collection): Additional Fields
  - Option: waitUntil (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: includeNavigationBar (value: undefined)
  - Option: screenResolution (value: undefined)
  - Option: disableResize (value: undefined)
- **url** (string): URL to load in the window
- **additionalFields** (collection): Additional Fields
  - Option: waitUntil (value: undefined)
- **outputImageAsBinary** (boolean): Whether to output the image as a binary file instead of a base64 encoded string
- **operation** (options): Operation
  - Option: Delete (value: deleteFile)
  - Option: Get (value: get)
  - Option: Get Many (value: getMany)
  - Option: Load (value: load)
  - Option: Upload (value: upload)
- **fileId** (string): ID of the file to delete
- **fileId** (string): ID of the file to retrieve
- **outputBinaryFile** (boolean): Whether to output the file in binary format if the file is ready for download
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **sessionIds** (string): Comma-separated list of <a href="https://docs.airtop.ai/api-reference/airtop-api/sessions/create" target="_blank">Session IDs</a> to filter files by. When empty, all files from all sessions will be returned.
- **outputSingleItem** (boolean): Whether to output one item containing all files or output each file as a separate item
- **sessionId** (string): The session ID to load the file into
- **windowId** (string): The window ID to trigger the file input in
- **fileId** (string): ID of the file to load into the session
- **elementDescription** (string): Optional description of the file input to interact with
- **includeHiddenElements** (boolean): Whether to include hidden elements in the interaction
- **sessionId** (string): The session ID to load the file into
- **windowId** (string): The window ID to trigger the file input in
- **fileName** (string): Name for the file to upload. For a session, all files loaded should have <b>unique names</b>.
- **fileType** (options): Choose the type of file to upload. Defaults to 'Customer Upload'.
  - Option: Browser Download (value: browser_download)
  - Option: Screenshot (value: screenshot)
  - Option: Video (value: video)
  - Option: Customer Upload (value: customer_upload)
- **source** (options): Source of the file to upload
  - Option: URL (value: url)
  - Option: Binary (value: binary)
- **binaryPropertyName** (string): Name of the binary property containing the file data
- **url** (string): URL from where to fetch the file to upload
- **triggerFileInputParameter** (boolean): Whether to automatically trigger the file input dialog in the current window. If disabled, the file will only be uploaded to the session without opening the file input dialog.
- **elementDescription** (string): Optional description of the file input to interact with
- **includeHiddenElements** (boolean): Whether to include hidden elements in the interaction
- **operation** (options): Operation
  - Option: Query Page (value: query)
  - Option: Query Page with Pagination (value: getPaginated)
  - Option: Smart Scrape (value: scrape)
- **sessionMode** (options): Choose between creating a new session or using an existing one
  - Option: Automatically Create Session (value: new)
  - Option: Use Existing Session (value: existing)
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **windowId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session#windows" target="_blank">Window</a> to use
- **url** (string): URL to load in the window
- **profileName** (string): The name of the Airtop profile to load or create
- **autoTerminateSession** (boolean): Whether to terminate the session after the operation is complete. When disabled, you must manually terminate the session. By default, idle sessions timeout after 10 minutes
- **prompt** (string): The prompt to extract data from the pages
- **additionalFields** (collection): Additional Fields
  - Option: outputSchema (value: undefined)
  - Option: parseJsonOutput (value: undefined)
  - Option: interactionMode (value: undefined)
  - Option: paginationMode (value: undefined)
- **prompt** (string): The prompt to query the page content
- **additionalFields** (collection): Additional Fields
  - Option: outputSchema (value: undefined)
  - Option: parseJsonOutput (value: undefined)
  - Option: includeVisualAnalysis (value: undefined)
- **operation** (options): Operation
  - Option: Click an Element (value: click)
  - Option: Fill Form (value: fill)
  - Option: Hover on an Element (value: hover)
  - Option: Scroll (value: scroll)
  - Option: Type (value: type)
- **sessionId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
- **windowId** (string): The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session#windows" target="_blank">Window</a> to use
- **elementDescription** (string): A specific description of the element to execute the interaction on
- **clickType** (options): The type of click to perform. Defaults to left click.
  - Option: Left Click (value: click)
  - Option: Double Click (value: doubleClick)
  - Option: Right Click (value: rightClick)
- **formData** (string): The information to fill into the form written in natural language
- **elementDescription** (string): A specific description of the element to execute the interaction on
- **scrollingMode** (options): Choose the mode of scrolling
  - Option: Automatic (value: automatic)
  - Option: Manual (value: manual)
- **scrollToElement** (string): A natural language description of the element to scroll to
- **scrollToEdge** (fixedCollection): The direction to scroll to. When 'Scroll By' is defined, 'Scroll To Edge' action will be executed first, then 'Scroll By' action.
  - Option: edgeValues (value: undefined)
- **scrollBy** (fixedCollection): The amount to scroll by. When 'Scroll To Edge' is defined, 'Scroll By' action will be executed after 'Scroll To Edge'.
  - Option: scrollValues (value: undefined)
- **scrollWithin** (string): Scroll within an element on the page
- **text** (string): The text to type into the browser window
- **pressEnterKey** (boolean): Whether to press the Enter key after typing the text
- **elementDescription** (string): A specific description of the element to execute the interaction on
- **additionalFields** (collection): Additional Fields
  - Option: visualScope (value: undefined)
  - Option: waitForNavigation (value: undefined)
