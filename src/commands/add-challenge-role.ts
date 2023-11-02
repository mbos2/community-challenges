import { Flashcore, type CommandConfig } from '@roboplay/robo.js';
import { IGuildRoleShort } from '../common/types.js';

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

export default async (interaction: any) => {
  try {
    const role = interaction.options.getRole('role');
    const roleShort: IGuildRoleShort = {
      value: role.id,
      name: role.name,
    }   
    const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles'));
    existingRoles.push(roleShort);
    await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles));

    return {content: `Added challenge role `, ephemeral: true};
  } catch (error) {
    console.log(error)
    return {content: `Error adding challenge rolee . . .`, ephemeral: true}
  }
}