import type { CommandConfig } from '@roboplay/robo.js';
import { challengeModal } from '../utils/utils.js';

export const config: CommandConfig = {
  description: 'Submit a challenge', 
}

export default async (interaction: any) => {
  const modal = await challengeModal();
  try {
    await interaction.showModal(modal.modal);
  } catch (error) {
    console.log(error)
  }
}