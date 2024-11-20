import { Flashcore, type CommandConfig } from 'robo.js';
import { ChatInputCommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Add or remove challenge roles',
  options: [
    {
      name: 'role',
      description: 'Role',
      required: true,
    },
  ]
}

export default async (interaction: ChatInputCommandInteraction) => {
  try {
    const role = interaction.options.get('role')!.value as string;
    const roleSliced = role?.slice(3, -1);
    const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles', {
      namespace: interaction.guildId!
    }));
    const indexToRemove = existingRoles.findIndex((item: any) => item.value === roleSliced);

    if (indexToRemove !== -1) {
      existingRoles.splice(indexToRemove, 1);
      await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles), {
        namespace: interaction.guildId!
      });
      return {content: `Challenge role removed `, ephemeral: true};
    }
    else {
      return {content: `Challenge role not found. Try running '/list-challenge-roles' command to see what roles are avaliable. `, ephemeral: true};
    }
  } catch (error) {
    console.log(error)
    return {content: `Error reseting challenge roles . . .`, ephemeral: true}
  }
}