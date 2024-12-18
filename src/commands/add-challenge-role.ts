import { Flashcore, type CommandConfig } from 'robo.js';
import { IGuildRoleShort } from '../common/types.js';
import { ChatInputCommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Add or remove challenge roles',
  options: [
    {
      name: 'role',
      description: 'Role',
      type: 'role',
      required: true,
    },
  ]
}

export default async (interaction: ChatInputCommandInteraction) => {
  try {
    const role = interaction.options.getRole('role');
    const roleShort: IGuildRoleShort = {
      value: role!.id,
      name: role!.name,
    }   
    let existingRoles = await Flashcore.get('challenges-admin-roles', {
      namespace: interaction.guildId!
    }) as any;

    if (!existingRoles) {
      existingRoles = [];
    } else {
      existingRoles = JSON.parse(existingRoles);
    }

    existingRoles.push(roleShort);
    await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles), {
      namespace: interaction.guildId!
    });

    return {content: `Added challenge role `, ephemeral: true};
  } catch (error) {
    console.log(error)
    return {content: `Error adding challenge rolee . . .`, ephemeral: true}
  }
}