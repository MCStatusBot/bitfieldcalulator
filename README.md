# MCStatus Bot Bitfield Calculator
This NPM package provides a utility for calculating bitfields for our API token permissions.

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
console.log("can create Minecraft servers: " + MCStatusBotBitfieldCalulator.has('CREATE_MINECRAFT_SERVER'));
//or you can do
console.log("can create Minecraft servers: " + permissionsArray.includes('CREATE_MINECRAFT_SERVER'));

//get a bitfield from a permissions array
const bitfield = MCStatusBotBitfieldCalulator.bitfield(["CREATE_MINECRAFT_SERVER", "DELETE_MINECRAFT_SERVER", "CREATE_CHANNEL_WATCHER"])
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