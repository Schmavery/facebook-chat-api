# Changelog
## 1.4.0 (04-28-2017)
* [Breaking change] [getThreadHistory](/DOCS.md#getThreadHistory): update parameters - no more start & end params; replaced with amount
* [New] [setMessageReaction](/DOCS.md#setMessageReaction): set reaction on message
* [New] [forwardAttachment](/DOCS.md#forwardAttachment): send attachment to array of users
* [setMessage](/DOCS.md#sendMessage): added Mentions field
* [sendTypingIndicator](/DOCS.md#sendTypingIndicator): make callback optional
* [getUserID](/DOCS.md#getUserID): returns all results instead of just users; callback obj array now includes a type (generally user, group, page, event or app)
* [Internal] Async function support

## 1.3.0 (04-01-2017)
* [New] [changeBlockedStatus](/DOCS.md#changeBlockedStatus): combines blockUser & unblockUser functions
* [changeThreadColor](/DOCS.md#changeThreadColor): callback is now optional
* [Internal] [getThreadHistory](/DOCS.md#getThreadHistory): callback arrays will be error filtered before returned

## 1.2.0 (08-18-2016)
* [New] [muteThread](/DOCS.md#muteThread): mute a chat for a period of time, or unmute a chat
* [New] [handleMessageRequest](/DOCS.md#handleMessageRequest): accept or ignore message request(s)
* [getThreadList](/DOCS.md#getThreadList): optional type argument; can be 'inbox', 'pending', or 'archived'. Inbox is default
