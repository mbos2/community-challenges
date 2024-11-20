import { Flashcore } from "robo.js";
import { isAdmin } from "../utils/utils.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = [];
        const member = interaction.member;
        const guildRoles = member.guild.roles.cache;
        const ownerId = member.guild.ownerId;
        if (guildRoles) {
            guildRoles.forEach((role)=>{
                if (isAdmin(role.permissions.bitfield)) {
                    roles.push({
                        value: role.id,
                        name: role.name
                    });
                }
            });
        }
        roles.push({
            ownerId: ownerId
        });
        await Flashcore.set('challenges-admin-roles', JSON.stringify(roles), {
            namespace: interaction.guildId
        });
        return {
            content: `Challenge roles reset successfully`,
            ephemeral: true
        };
    } catch (error) {
        return {
            content: `Error reseting challenge roles . . .`,
            ephemeral: true
        };
    }
});
