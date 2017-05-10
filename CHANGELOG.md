# Changelog
## 1.4.0 (2017-04-28)
* [Breaking change] [getThreadHistory](/DOCS.md#getThreadHistory): update parameters - no more start & end params; replaced with amount ([#453])
* [New] [setMessageReaction](/DOCS.md#setMessageReaction): set reaction on message ([#427], [#437], [#445])
* [New] [forwardAttachment](/DOCS.md#forwardAttachment): send attachment to array of users ([#435])
* [setMessage](/DOCS.md#sendMessage): added Mentions field ([#460])
* [sendTypingIndicator](/DOCS.md#sendTypingIndicator): make callback optional ([#457])
* [getUserID](/DOCS.md#getUserID): returns all results instead of just users; callback obj array now includes a type (generally user, group, page, event or app) ([#459])
* [Internal] Async function support ([#425])

## 1.3.0 (2017-04-01)
* [New] [changeBlockedStatus](/DOCS.md#changeBlockedStatus): combines blockUser & unblockUser functions ([#369])
* [changeThreadColor](/DOCS.md#changeThreadColor): callback is now optional ([#367])
* [Internal] [getThreadHistory](/DOCS.md#getThreadHistory): callback arrays will be error filtered before returned ([#360])

## 1.2.0 (2016-08-18)
* [New] [muteThread](/DOCS.md#muteThread): mute a chat for a period of time, or unmute a chat ([#295])
* [New] [handleMessageRequest](/DOCS.md#handleMessageRequest): accept or ignore message request(s) ([#301])
* [getThreadList](/DOCS.md#getThreadList): optional type argument; can be 'inbox', 'pending', or 'archived'. Inbox is default ([#301])
