//code from https://www.npmjs.com/package/discord-bitfield-calculator/

const permissions = {
    // Minecraft server permissions
    VIEW_MINECRAFT_SERVERS: 0x1,
    EDIT_MINECRAFT_SERVERS: 0x2,
    CREATE_MINECRAFT_SERVERS: 0x4,
    DELETE_MINECRAFT_SERVERS: 0x8,
    LINK_MINECRAFTSERVER_TO_GUILD: 0x10,
    EDIT_MINECRAFTSERVER_ADMINS: 0x20,
    EDIT_MINECRAFTSERVER_MAINGUILD: 0x40,
    EDIT_MINECRAFTSERVER_NAME: 0x80,
    EDIT_MINECRAFTSERVER_DESCRIPTION: 0x100,
    DELETE_MINECRAFTSERVER_LOGS: 0x200,
    SET_MINECRAFTSERVER_PRIVATE: 0x400,

    // Discord server permissions
    VIEW_DISCORD_SERVERS: 0x1000,
    EDIT_DISCORD_SERVERS: 0x2000,

    // User settings permissions
    VIEW_USER_SETTINGS: 0x4000,
    EDIT_USER_SETTINGS: 0x8000,

    // Websocket permission
    WEBSOCKET: 0x10000
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