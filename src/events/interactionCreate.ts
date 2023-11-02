import { Flashcore } from '@roboplay/robo.js';
import { challengeReviewButtonComponent, userHasPermission } from '../utils/utils.js';

export default async (interaction: any) => {
  if (interaction.isModalSubmit()) {
      const reviewsChannel: string = await Flashcore.get('challenges-review-channel');
      if (!reviewsChannel) {
        return interaction.reply({content: 'No review channel set. Please use `set-challenges-review-channel` command to set a channel for challenges reviews.', ephemeral: true});
      }
      const btn = challengeReviewButtonComponent();
      const channelParsed = JSON.parse(reviewsChannel);
      const fields = interaction.fields.fields;
      const channel = interaction.member.guild.channels.cache.get(channelParsed.id);
      const challenge = fields.get('challenge').value;
      const embed = {
        title: 'Challenge submission',
        description: challenge,
        color: 0x0099ff,
        timestamp: new Date(),
        footer: {
          text: `Submitted by ${interaction.member.user.username}`,
        },
      };
      channel.send({embeds: [embed], components: [btn]});
      interaction.reply({content: 'Challenge submitted for review', ephemeral: true});
  }

  if (interaction.isButton()) {
    const userId = interaction.member.user.id;
    const user = await interaction.guild.members.fetch(userId);
    const hasPermission = await userHasPermission(user, interaction.member.guild.ownerId);

    if (hasPermission) {
      if (interaction.customId === 'approveChallenge') {
        const challengesChannel = await Flashcore.get('challenges-channel') as string;
        if (!challengesChannel || challengesChannel.length < 1) {
          return interaction.reply({content: 'No challenges channel set. Please use `set-challenges-channel` command to set a channel for challenges reviews.', ephemeral: true});
        }
        const channelParsed = JSON.parse(challengesChannel);
        interaction.update({content: 'Challenge Approved', components: []});
        const messageEmbedContent = interaction.message.embeds[0];
        const channel = interaction.member.guild.channels.cache.get(channelParsed.id);
        return channel.send({embeds: [messageEmbedContent]});
      }
  
      if (interaction.customId === 'rejectChallenge') {
        interaction.update({content: 'Challenge Rejected', components: []});
      }
    } else {
      interaction.reply({content: 'You do not have permission to review challenges', ephemeral: true});
    }
  }
}
