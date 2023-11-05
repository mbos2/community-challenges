import { Flashcore, type CommandConfig } from '@roboplay/robo.js';
import { IGuildRoleShort, IOwner } from '../common/types.js';
import { isAdmin } from '../utils/utils.js';
import { ChatInputCommandInteraction, GuildMember } from 'discord.js';

export const config: CommandConfig = {
  description: 'Reset challenge roles to administrators.',
}

export default async (interaction: ChatInputCommandInteraction) => {
  try {
    const roles: (IGuildRoleShort | IOwner)[] = [];
    const member = interaction.member as GuildMember;
    const guildRoles = member.guild.roles.cache;
    const ownerId = member.guild.ownerId;

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

    roles.push({
      ownerId: ownerId,
    })
    await Flashcore.set('challenges-admin-roles', JSON.stringify(roles), {
      namespace: interaction.guildId!
    });
    return {content: `Challenge roles reset successfully`, ephemeral: true};
  } catch (error) {
    return {content: `Error reseting challenge roles . . .`, ephemeral: true}
  }
}
