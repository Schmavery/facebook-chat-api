# Changelog
## 1.6.1 (unreleased)
* [New] [changeAdminStatus](/DOCS.md#changeAdminStatus): Function to add/remove admins in group threads ([#659](https://github.com/Schmavery/facebook-chat-api/pull/659))

## 1.5.0
* [Fix] Logging in using login approvals (2FA) now work ([#548](https://github.com/Schmavery/facebook-chat-api/pull/548))
* [New] [listen](/DOCS.md#listen): Adds field `mentions` that stores an array of ids of users tagged in the message ([#510](https://github.com/Schmavery/facebook-chat-api/pull/510))
* [Breaking change] [getThreadList](/DOCS.md#getThreadList): Removes deprecated fields in returned object, adds some new fields ([#488](https://github.com/Schmavery/facebook-chat-api/pull/488))
* [Breaking change] [getThreadInfo](/DOCS.md#getThreadInfo): Removes deprecated fields in returned object, adds some new fields ([#488](https://github.com/Schmavery/facebook-chat-api/pull/488))
* [New] [getEmojiUrl](/DOCS.md#getEmojiUrl): Adds utility function for getting the image URL for a Messenger-style emoji ([#477](https://github.com/Schmavery/facebook-chat-api/pull/477))
* [Breaking change] [changeThreadColor](/DOCS.md#changeThreadColor): Due to Facebook backend changes, the thread color can no longer be set to an arbitrary hex value. Color validation and `api.threadColors` have been added to facilitate this change ([#512](https://github.com/Schmavery/facebook-chat-api/pull/512))
* [getThreadHistory](/DOCS.md#getThreadHistory): Fix crash when the author of an old message is no longer available ([#521](https://github.com/Schmavery/facebook-chat-api/pull/521))
* [New] [message](/DOCS.md#message): Adds field `isUnread` that represents whether or not the message was read ([#519](https://github.com/Schmavery/facebook-chat-api/pull/519))

## 1.4.0 (2017-04-28)
* [Breaking change] [getThreadHistory](/DOCS.md#getThreadHistory): update parameters - no more start & end params; replaced with amount ([#453](https://github.com/Schmavery/facebook-chat-api/pull/453))
* [New] [setMessageReaction](/DOCS.md#setMessageReaction): set reaction on message ([#427](https://github.com/Schmavery/facebook-chat-api/pull/427), [#437](https://github.com/Schmavery/facebook-chat-api/pull/437), [#445](https://github.com/Schmavery/facebook-chat-api/pull/445))
* [New] [forwardAttachment](/DOCS.md#forwardAttachment): send attachment to array of users ([#435](https://github.com/Schmavery/facebook-chat-api/pull/435))
* [setMessage](/DOCS.md#sendMessage): added Mentions field ([#460](https://github.com/Schmavery/facebook-chat-api/pull/460))
* [sendTypingIndicator](/DOCS.md#sendTypingIndicator): make callback optional ([#457](https://github.com/Schmavery/facebook-chat-api/pull/457))
* [getUserID](/DOCS.md#getUserID): returns all results instead of just users; callback obj array now includes a type (generally user, group, page, event or app) ([#459](https://github.com/Schmavery/facebook-chat-api/pull/459))
* [Internal] Async function support ([#425](https://github.com/Schmavery/facebook-chat-api/pull/425))

## 1.3.0 (2017-04-01)
* [New] [changeBlockedStatus](/DOCS.md#changeBlockedStatus): combines blockUser & unblockUser functions ([#369](https://github.com/Schmavery/facebook-chat-api/pull/369))
* [changeThreadColor](/DOCS.md#changeThreadColor): callback is now optional ([#367](https://github.com/Schmavery/facebook-chat-api/pull/367))
* [Internal] [getThreadHistory](/DOCS.md#getThreadHistory): callback arrays will be error filtered before returned ([#360](https://github.com/Schmavery/facebook-chat-api/pull/360))

## 1.2.0 (2016-08-18)
* [New] [muteThread](/DOCS.md#muteThread): mute a chat for a period of time, or unmute a chat ([#295](https://github.com/Schmavery/facebook-chat-api/pull/295))
* [New] [handleMessageRequest](/DOCS.md#handleMessageRequest): accept or ignore message request(s) ([#301](https://github.com/Schmavery/facebook-chat-api/pull/301))
* [getThreadList](/DOCS.md#getThreadList): optional type argument; can be 'inbox', 'pending', or 'archived'. Inbox is default ([#301](https://github.com/Schmavery/facebook-chat-api/pull/301))
