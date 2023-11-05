import { Flashcore, type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction } from 'discord.js';

export const config: CommandConfig = {
  description: 'Set a channel for approved challenge submission reviews.',
  options: [
    {
      name: 'channel',
      description: 'Challenges channel',
      type: 'channel',
      required: true,
    },
  ]
}

export default async (interaction: ChatInputCommandInteraction) => {
  const channel = interaction.options.getChannel('channel');
  try {
    await Flashcore.set('challenges-channel', JSON.stringify(channel), {
      namespace: interaction.guildId!
    });
    return {content: `Challenges channel set to #${channel!.name}`, ephemeral: true};
  } catch (error) {
    return {content: `Error setting challenges channel to #${channel!.name}`, ephemeral: true}
  }
}