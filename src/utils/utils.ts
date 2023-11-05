
import { 
  ActionRowBuilder, 
  ModalBuilder, 
  TextInputBuilder, 
  TextInputStyle,
  ButtonBuilder,
  ButtonStyle,
  GuildMember,
  ButtonInteraction
} from 'discord.js';
import { Flashcore } from '@roboplay/robo.js';
import { IGuildRoleShort, IOwner } from '../common/types';

export const challengeModal = async () => {
  const modal = new ModalBuilder()
  .setCustomId('challenge-modal')
  .setTitle('Submit a challenge');

  const content = new TextInputBuilder()
    .setCustomId('challenge')
    .setLabel("Challenge content")
    .setStyle(TextInputStyle.Paragraph)
    .setRequired(true)
    .setPlaceholder('Your challenge content here! It supports discord markdown!')
    .setMinLength(200)
    .setMaxLength(4000);

  const firstActionRow = new ActionRowBuilder().addComponents(content);

  modal.addComponents(firstActionRow as any);
  return {
    modal: modal,
  }
}

export const challengeReviewButtonComponent = () => {
  const approve = new ButtonBuilder()
  .setCustomId('approveChallenge')
  .setLabel('Approve')
  .setStyle(ButtonStyle.Success);

  const cancel = new ButtonBuilder()
    .setCustomId('rejectChallenge')
    .setLabel('Reject')
    .setStyle(ButtonStyle.Secondary);

  const row = new ActionRowBuilder()
  .addComponents(approve, cancel);

  return row;
}

export const isAdmin = (bitfield: any) => {
  const adminBit = 8; // The bit for the ADMINISTRATOR permission
  return (bitfield & BigInt(adminBit)) === BigInt(adminBit);
};

export const userHasChallengeReviewPermission = async (user: GuildMember, guildOwnerId: string, guildId: string) => {
  let hasPermission = false;
  if (user.id === guildOwnerId) {
    hasPermission = true;
    return hasPermission;
  }

  const roles = await Flashcore.get('challenges-admin-roles', {
    namespace: guildId
  }) as string;
  const parsedRoles = JSON.parse(roles);
  const userRoles = user.roles.cache;

  userRoles.forEach((role) => {
    const id = role.id;
    const exists = parsedRoles.some((obj: IGuildRoleShort) => obj.value === id);
    if (exists) {
      hasPermission = true;
      return hasPermission;
    }
  });

  return hasPermission;
}

export const listChallengeRoles = async (guildId: string) => {
  const roles: (IGuildRoleShort | IOwner)[] = [];
  const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles', {
    namespace: guildId
  }) as string;
  const existingRoles = existingRolesFlashcore ? JSON.parse(existingRolesFlashcore) : [];
  existingRoles && 
    existingRoles.map((role: any) => {
      if (typeof role === 'object' && 'name' in role && 'id' in role) {
        roles.push({
          name: role.name,
          value: role.id,
        });
      }
    });

  return roles;
}

export const setInitialChallengeRolesIfNotExisting = async (interaction: ButtonInteraction) => {
  const guildId: string | null = interaction.guildId;
  if (!guildId) {
    console.log('No guild id found for the interaction, cannot set initial challenge roles. . .');
    return;
  }
  const adminRoles: string = await Flashcore.get('challenges-admin-roles', {
    namespace: guildId
  });
  if (!adminRoles) {
    console.log(`No challenges review roles found for the guild id: ${guildId}, setting default roles. . .`);
    const guildMember = interaction.member as GuildMember;
    const guildData = guildMember.guild;
    const guildRoles = guildData.roles.cache;
    const roles: (IGuildRoleShort | IOwner)[] = [];
    if (guildRoles) {
      guildRoles.forEach((role) => {
        if (isAdmin(role.permissions.bitfield)) {
          roles.push({
            value: role.id,
            name: role.name,
          });        
        }
      });
    }
    roles.push({
      ownerId: guildData.ownerId,
    })
    await Flashcore.set('challenges-admin-roles', JSON.stringify(roles), {
      namespace: guildId
    });
    console.log(`Default challenge review roles set for the guild id: ${guildId}`);
  } else {
    console.log(`Challenge review roles already set for the guild id: ${guildId}`);
  }
}