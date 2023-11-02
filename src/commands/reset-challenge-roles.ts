import { Flashcore, type CommandConfig } from '@roboplay/robo.js';
import { IGuildRoleShort, IOwner } from '../common/types.js';
import { isAdmin } from '../utils/utils.js';
import { ROLES } from '../common/globals.js';

export const config: CommandConfig = {
  description: 'Reset challenge roles to administrators.',
}

export default async (interaction: any) => {
  try {
    const roles: any = [];
    const guildRoles = interaction.member.guild.roles.cache;
    const ownerId = interaction.member.guild.ownerId;

    if (guildRoles) {
      guildRoles.forEach((role: any) => {
        if (isAdmin(role.permissions.bitfield)) {
          roles.push({
            value: role.id,
            name: role.name,
          }); 
        }
      });
    }

    ROLES.roles = roles;

    roles.push({
      ownerId: ownerId,
    })
    await Flashcore.set('challenges-admin-roles', JSON.stringify(roles));
    return {content: `Challenge roles reset successfully`, ephemeral: true};
  } catch (error) {
    return {content: `Error reseting challenge roles . . .`, ephemeral: true}
  }
}
