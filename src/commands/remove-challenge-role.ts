import { Flashcore, type CommandConfig } from '@roboplay/robo.js';

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

export default async (interaction: any) => {
  try {
    const role = interaction.options.get('role').value;
    const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles'));
    const indexToRemove = existingRoles.findIndex((item: any) => item.value === role);
    if (indexToRemove !== -1) {
      existingRoles.splice(indexToRemove, 1);
      await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles));
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