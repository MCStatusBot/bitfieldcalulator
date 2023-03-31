//code from https://www.npmjs.com/package/discord-bitfield-calculator/

const permissions = {
    CREATE_MINECRAFT_SERVER: 0x1,
    VIEW_CHANNEL: 0x4,
    EDIT_MINECRAFT_SERVER: 0x8,
    DELETE_MINECRAFT_SERVER: 0x10,
    VIEW_MINECRAFT_SERVERS: 0x20,
    EDIT_DISCORD_SERVER: 0x40,
    CREATE_MESSAGE_WATCHER: 0x80,
    CREATE_CHANNEL_WATCHER: 0x100,
    WEBSOCKET: 0x200,
};
/**
 * calculate the permissions from a bitfield
 * @param {*} permBitfield 
 * @returns 
 */
module.exports.permissions = (permBitfield) => {
    let currentPermissions = [];
    const permissionUpper = Math.floor(permBitfield / 0x100000000);
    const permissionLower = Math.floor(permBitfield % 0x100000000);
    for (let key in permissions) {
        if ((permissions[key] >= 0x100000000 && (permissionUpper & Math.floor(permissions[key] / 0x100000000))) || (permissions[key] < 0x100000000 && (permissionLower & permissions[key]))) {
            currentPermissions.push(key);
        } else {
            continue;
        };
    };
    return currentPermissions;
}
/**
 * see if a bitfield contains a permission
 * @param {*} bitfield 
 * @param {*} permission 
 * @returns 
 */
module.exports.has = (bitfield, permission) => {
    return this.permissions(bitfield).includes(permission);
};
/**
 * calculate the permission bitfield from a given array 
 * @param {Array} permissionArray 
 * @returns 
 */
module.exports.bitfield = (permissionArray) => {
    let bitfield = 0;
    for (let i = 0; i < permissionArray.length; i++) {
      const permission = permissionArray[i];
      if (!permissions[permission]) {
        return new Error(`${permission} is not a valid permission`);
      }
      bitfield |= permissions[permission];
    }
    return bitfield;
  };