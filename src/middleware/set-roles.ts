import { Flashcore } from '@roboplay/robo.js';
import { ROLES } from '../common/globals.js';

export default async function () {
  const choices: any = [];
  const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles') as string;
  const existingRoles = existingRolesFlashcore ? JSON.parse(existingRolesFlashcore) : [];
  existingRoles && 
    existingRoles.map((role: any) => {
      if (typeof role === 'object' && 'name' in role && 'value' in role) {
        choices.push({
          name: role.name,
          value: role.id,
        });
      }
    });
  
  if (ROLES.roles.length === 0) {
    ROLES.roles = choices;
  }
}
