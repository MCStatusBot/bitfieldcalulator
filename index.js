//code from https://www.npmjs.com/package/discord-bitfield-calculator/
const permissions = {
    // Minecraft server permissions
    LIVE_PING_MINECRAFT_SERVER: 0x4, // Applies to both bot commands and dashboard. If the user doesn't have this permission, attempt to get the last stored/cached result; if unavailable, return a 404.

    SET_CUSTOM_MINECRAFT_SERVER_ID: 0x8, // Only expected to be given to mods. No user should need this. Submit a ticket to get a custom ID.

    // Server-specific permissions (If given to a user, not an MC server user, it applies to all MC servers. DANGER: ADMIN ONLY)
    LINK_MINECRAFT_SERVER_TO_GUILD: 0x10, // Should be the base permission instead of using "view," etc. This allows users to add the MC server to a guild even if it's private.
    DELETE_MINECRAFT_SERVER: 0x20,
    VIEW_PRIVATE_MINECRAFT_SERVER: 0x1, // Allows the user to view all details of a private server. Considered the base permission to access the rest. If given to a user account, it grants OP access to private server details.
    EDIT_MINECRAFT_SERVER_NAME: 0x40,
    EDIT_MINECRAFT_SERVER_DESCRIPTION: 0x80,
    EDIT_MINECRAFT_SERVER_PAGE: 0x100,
    EDIT_MINECRAFT_SERVER_ADMINS: 0x200,
    TOGGLE_MINECRAFT_SERVER_LOGS: 0x400,
    TOGGLE_MINECRAFT_SERVER_PRIVATE: 0x800,
    TRANSFER_MINECRAFT_SERVER_OWNERSHIP: 0x1000,

    // Admin-specific permissions (Should not be given to regular users. DANGER)
    VIEW_DISCORD_SERVERS: 0x2000,
    EDIT_DISCORD_SERVERS: 0x4000, // Edit Discord server settings but not their limits.

    // User settings permissions
    MANAGE_MINECRAFT_SERVER_LIMITS: 0x40000,
    MANAGE_USER_LIMITS: 0x80000,
    MANAGE_GUILD_LIMITS: 0x1000000,

    VIEW_USER: 0x8000,
    EDIT_USER: 0x10000,
    DELETE_USER: 0x20000,
    RESET_USER_PASSWORD: 0x100000,

    EDIT_GUILD_SETTINGS: 0x400000,
    DELETE_GUILD: 0x800000,

    SUSPEND_MINECRAFT_SERVER: 0x2000000,
    BAN_USER: 0x4000000
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