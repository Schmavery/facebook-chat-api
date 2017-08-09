# Changelog
## 1.5.0 (unreleased)
* [Breaking change] [getThreadList](/DOCS.md#getThreadList): Removes deprecated fields in returned object, adds some new fields ([#488](https://github.com/Schmavery/facebook-chat-api/pull/488))
* [Breaking change] [getThreadInfo](/DOCS.md#getThreadInfo): Removes deprecated fields in returned object, adds some new fields ([#488](https://github.com/Schmavery/facebook-chat-api/pull/488))
* [New] [getEmojiUrl](/DOCS.md#getEmojiUrl): Adds utility function for getting the image URL for a Messenger-style emoji ([#477](https://github.com/Schmavery/facebook-chat-api/pull/477))

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
