import { Flashcore, type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Unsets challenge channels.',
}

export default async (interaction: ChatInputCommandInteraction) => {
  try {
    await Flashcore.set('challenges-channel', null, {
      namespace: interaction.guildId!
    });
    await Flashcore.set('challenges-review-channel', null);
    return {content: `Challenges channels unset`, ephemeral: true};
  } catch (error) {
    return {content: `Error unsetting challenges channels`, ephemeral: true}
  }
}