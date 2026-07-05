# Node: Reddit

**Name**: reddit
**Category**: transform
**Description**: Consume the Reddit API
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
  - Option: Post (value: post)
  - Option: Post Comment (value: postComment)
  - Option: Profile (value: profile)
  - Option: Subreddit (value: subreddit)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
  - Option: Delete (value: delete)
  - Option: Reply (value: reply)
- **postId** (string): ID of the post to write the comment to. Found in the post URL: <code>/r/[subreddit_name]/comments/[post_id]/[post_title]</code>
- **commentText** (string): Text of the comment. Markdown supported.
- **subreddit** (string): The name of subreddit where the post is
- **postId** (string): ID of the post to get all comments from. Found in the post URL: <code>/r/[subreddit_name]/comments/[post_id]/[post_title]</code>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **commentId** (string): ID of the comment to remove. Found in the comment URL:<code>/r/[subreddit_name]/comments/[post_id]/[post_title]/[comment_id]</code>
- **commentId** (string): ID of the comment to reply to. To be found in the comment URL: <code>www.reddit.com/r/[subreddit_name]/comments/[post_id]/[post_title]/[comment_id]</code>
- **replyText** (string): Text of the reply. Markdown supported.
- **operation** (options): Operation
  - Option: Get (value: get)
- **details** (options): Details of my account to retrieve
  - Option: Blocked Users (value: blockedUsers)
  - Option: Friends (value: friends)
  - Option: Identity (value: identity)
  - Option: Karma (value: karma)
  - Option: Preferences (value: prefs)
  - Option: Saved (value: saved)
  - Option: Trophies (value: trophies)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **content** (options): Subreddit content to retrieve
  - Option: About (value: about)
  - Option: Rules (value: rules)
- **subreddit** (string): The name of subreddit to retrieve the content from
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: keyword (value: undefined)
  - Option: trending (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Search (value: search)
- **subreddit** (string): Subreddit to create the post in
- **kind** (options): The kind of the post to create
  - Option: Text Post (value: self)
  - Option: Link Post (value: link)
  - Option: Image Post (value: image)
- **title** (string): Title of the post, up to 300 characters long
- **url** (string): URL of the post
- **text** (string): Text of the post. Markdown supported.
- **resubmit** (boolean): Whether the URL will be posted even if it was already posted to the subreddit before. Otherwise, the re-posting will trigger an error.
- **postId** (string): ID of the post to delete. Found in the post URL: <code>/r/[subreddit_name]/comments/[post_id]/[post_title]</code>
- **subreddit** (string): The name of subreddit to retrieve the post from
- **postId** (string): ID of the post to retrieve. Found in the post URL: <code>/r/[subreddit_name]/comments/[post_id]/[post_title]</code>
- **subreddit** (string): The name of subreddit to retrieve the posts from
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: category (value: undefined)
- **location** (options): Location where to search for posts
  - Option: All Reddit (value: allReddit)
  - Option: Subreddit (value: subreddit)
- **subreddit** (string): The name of subreddit to search in
- **keyword** (string): The keyword for the search
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: sort (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **username** (string): Reddit ID of the user to retrieve
- **details** (options): Details of the user to retrieve
  - Option: About (value: about)
  - Option: Comments (value: comments)
  - Option: Gilded (value: gilded)
  - Option: Overview (value: overview)
  - Option: Submitted (value: submitted)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
