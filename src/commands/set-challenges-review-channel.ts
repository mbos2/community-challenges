import { Flashcore, type CommandConfig } from '@roboplay/robo.js';

export const config: CommandConfig = {
  description: 'Set a channel for challenge submission reviews',
  options: [
    {
      name: 'channel',
      description: 'Challenges review channel',
      type: 'channel',
      required: true,
    },
  ]
}

export default async (interaction: any) => {
  const channel = interaction.options.getChannel('channel');
  try {
    await Flashcore.set('challenges-review-channel', JSON.stringify(channel));
    return {content: `Challenges review channel set to #${channel.name}`, ephemeral: true};
  } catch (error) {
    console.log(error)
    return {content: `Error setting challenges review channel to #${channel.name}`, ephemeral: true}
  }
}