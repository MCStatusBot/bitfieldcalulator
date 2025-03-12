# MCStatus Bot Bitfield Calculator
This NPM package provides a utility for calculating bitfields for our permissions you can grant on things like mcservers and api tokens.

## Usage
Here are some examples:

```js
Copy code
const MCStatusBotBitfieldCalulator = require('mcstatusbot-bitfieldcalulator')

const bitfield = 17;
//get permissions from a bitfield in an array
const permissionsArray = MCStatusBotBitfieldCalulator.permissions(bitfield)
console.log(permissionsArray);
//see if member has certain permission
console.log("can create Minecraft servers: " + MCStatusBotBitfieldCalulator.has('CREATE_MINECRAFT_SERVERS'));
//or you can do
console.log("can create Minecraft servers: " + permissionsArray.includes('CREATE_MINECRAFT_SERVERS'));

//get a bitfield from a permissions array
const bitfield = MCStatusBotBitfieldCalulator.bitfield(["CREATE_MINECRAFT_SERVERS", "DELETE_MINECRAFT_SERVER", "CREATE_CHANNEL_WATCHER"])
console.log(bitfield);
```

## Methods
MCStatusBotBitfieldCalulator.permissions(bitfield: Int)
Returns an array of permissions obtained from a bitfield.

MCStatusBotBitfieldCalulator.bitfield(permissions: Array)
Returns a bitfield calculated from an array of permissions.

MCStatusBotBitfieldCalulator.has(permission: String)
Checks if a user has a specific permission and returns a boolean value.

License
This package is licensed under the MIT license. See the LICENSE file for more information.



## permissions


global can be applied to user only


| Bitfield  | Permission Name  | Description  |
|-----------|-----------------|--------------|
| 0x2       | CREATE_MINECRAFT_SERVERS  | Allows creating Minecraft servers (up to limit).  |
| 0x4       | LIVE_PING_MINECRAFT_SERVER  | Allows user live pinging of the server via bot commands and dashboard. if not uses cached/last log result.  |
| 0x8       | SET_CUSTOM_MINECRAFT_SERVER_ID  | Mods-only permission to set custom server IDs.  |


mods admin only
| Bitfield  | Permission Name  | Description  |
|-----------|-----------------|--------------|
| 0x2000    | VIEW_DISCORD_SERVERS  | Allows viewing of all Discord servers bot is in.  |
| 0x4000    | EDIT_DISCORD_SERVERS  | Allows editing of all Discord server settings bot is in, excluding limits.  |
| 0x8000    | VIEW_USER  | Allows viewing all user details.  |
| 0x10000   | EDIT_USER  | Allows editing all user details.  |
| 0x20000   | DELETE_USER  | Allows deleting users.  |
| 0x40000   | MANAGE_MINECRAFT_SERVER_LIMITS  | Allows managing Minecraft server limits.  |
| 0x80000   | MANAGE_USER_LIMITS  | Allows managing user limits.  |
| 0x100000  | RESET_USER_PASSWORD  | Allows resetting user passwords.  |
| 0x400000  | EDIT_GUILD_SETTINGS  | Allows editing guild settings.  |
| 0x800000  | DELETE_GUILD  | Allows deleting a guild.  |
| 0x1000000 | MANAGE_GUILD_LIMITS  | Allows managing guild limits.  |
| 0x2000000 | SUSPEND_MINECRAFT_SERVER  | Allows suspending a Minecraft server.  |
| 0x4000000 | BAN_USER  | Allows banning users.  |


minecraft server specific when applied to user is global for all mc servers
| Bitfield  | Permission Name  | Description  |
|-----------|-----------------|--------------|
| 0x10      | LINK_MINECRAFT_SERVER_TO_GUILD  | Allows linking a Minecraft server to a guild, even if private.  |
| 0x20      | DELETE_MINECRAFT_SERVER  | Allows deletion of a Minecraft server.  |
| 0x40      | EDIT_MINECRAFT_SERVER_NAME  | Allows editing the server name.  |
| 0x80      | EDIT_MINECRAFT_SERVER_DESCRIPTION  | Allows editing the server description.  |
| 0x100     | EDIT_MINECRAFT_SERVER_PAGE  | Allows editing the server page.  |
| 0x200     | EDIT_MINECRAFT_SERVER_ADMINS  | Allows modifying server administrators.  |
| 0x400     | TOGGLE_MINECRAFT_SERVER_LOGS  | Allows enabling or disabling server logs.  |
| 0x800     | TOGGLE_MINECRAFT_SERVER_PRIVATE  | Allows toggling a server's private status.  |
| 0x1000    | TRANSFER_MINECRAFT_SERVER_OWNERSHIP  | Allows transferring ownership of a Minecraft server.  |

guild specific - please use discord inbuilt roles and permission managers to manage slash command permissions 