//@ts-nocheck
import { 
  ActionRowBuilder, 
  ModalBuilder, 
  TextInputBuilder, 
  TextInputStyle,
  ButtonBuilder,
  ButtonStyle
} from 'discord.js';
import { Flashcore } from '@roboplay/robo.js';

export const challengeModal = async () => {
  const modal = new ModalBuilder()
  .setCustomId('Challenge Modal')
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

  modal.addComponents(firstActionRow);
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

export const userHasPermission = async (user: any, guildOwnerId) => {
  let hasPermission = false;
  if (user.id === guildOwnerId) {
    hasPermission = true;
    return hasPermission;
  }

  const roles = await Flashcore.get('challenges-admin-roles') as string;
  const parsedRoles = JSON.parse(roles);
  const userRoles = user.roles.cache;

  userRoles.forEach((role) => {
    const id = role.id;
    const exists = parsedRoles.some((obj) => obj.value === id);
    if (exists) {
      hasPermission = true;
      return hasPermission;
    }
  });

  return hasPermission;
}

export const listChallengeRoles = async () => {
  const choices: any = [];
  const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles') as string;
  const existingRoles = existingRolesFlashcore ? JSON.parse(existingRolesFlashcore) : [];
  existingRoles && 
    existingRoles.map((role: any) => {
      if (typeof role === 'object' && 'name' in role && 'id' in role) {
        choices.push({
          name: role.name,
          value: role.id,
        });
      }
    });

  return choices;
}