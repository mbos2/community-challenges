import { Flashcore, type CommandConfig } from '@roboplay/robo.js';

export const config: CommandConfig = {
  description: 'Unsets challenge channels.',
}

export default async (interaction: any) => {
  const channel = interaction.options.getChannel('channel');
  try {
    await Flashcore.set('challenges-channel', null);
    await Flashcore.set('challenges-review-channel', null);
    return {content: `Challenges channels unset`, ephemeral: true};
  } catch (error) {
    return {content: `Error unsetting challenges channels`, ephemeral: true}
  }
}