import { Flashcore } from '@roboplay/robo.js';
import { challengeReviewButtonComponent, isAdmin, userHasPermission } from '../utils/utils.js';

export default async (interaction: any) => {
  try {
    console.log('Checking if challenge roles are set . . . ')
    const r = await Flashcore.get('challenges-admin-roles') as string;
    const roles = r ? JSON.parse(r) : [];
    if (roles.length > 0) {
      console.log('Challenge roles already set. Skipping . . .');
      return;
    }
    console.log('Challenge roles not set. Setting . . .');
    const tempRoles: any = [];
    const guildRoles = interaction.member.guild.roles.cache;
    const ownerId = interaction.member.guild.ownerId;

    if (guildRoles) {
      guildRoles.forEach((role: any) => {
        if (isAdmin(role.permissions.bitfield)) {
          tempRoles.push({
            value: role.id,
            name: role.name,
          }); 
        }
      });
    }

    tempRoles.push({
      ownerId: ownerId,
    })
    await Flashcore.set('challenges-admin-roles', JSON.stringify(tempRoles));
    console.log('Challenge roles reset successfully')
  } catch (error) {
    console.log(error)
    return {content: `Error reseting challenge roles . . .`, ephemeral: true}
  }
}
