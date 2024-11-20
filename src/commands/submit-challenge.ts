import type { CommandConfig } from 'robo.js';
import { challengeModal } from '../utils/utils.js';
import { ChatInputCommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Submit a challenge', 
}

export default async (interaction: ChatInputCommandInteraction) => {
  const modal = await challengeModal();
  try {
    await interaction.showModal(modal.modal);
  } catch (error) {
    console.log(error)
  }
}