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
* [changeThreadColor](/DOCS.md#changeThreadColor): Callback is now optional
* [Internal] [getThreadHistory](/DOCS.md#getThreadHistory): Callback arrays will be error filtered before returned
