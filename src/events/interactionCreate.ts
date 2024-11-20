import { Flashcore } from 'robo.js';
import { challengeReviewButtonComponent, setInitialChallengeRolesIfNotExisting, userHasChallengeReviewPermission } from '../utils/utils.js';
import { ButtonInteraction, GuildMember, ModalSubmitInteraction } from 'discord.js';

export default async (interaction: any) => {

  if (interaction.isModalSubmit()) {
    const i = interaction as ModalSubmitInteraction;
    if (i.customId === 'challenge-modal') {
      const reviewsChannel: string = await Flashcore.get('challenges-review-channel', {
        namespace: i.guildId!
      });

      if (!reviewsChannel) {
        return i.reply({content: 'No challenges review channel set. Please use `set-challenges-review-channel` command to set a channel for challenges reviews.', ephemeral: true});
      }

      const btn = challengeReviewButtonComponent();
      const channelParsed = JSON.parse(reviewsChannel);
      const fields = i.fields.fields as any;
      const member = i.member as GuildMember;
      const channel = member.guild.channels.cache.get(channelParsed.id) as any;
      const challenge = fields.get('challenge').value;
      const embed = {
        title: 'Challenge submission',
        description: challenge,
        color: 0x0099ff,
        timestamp: new Date(),
        footer: {
          text: `Submitted by ${member.user.username}`,
        },
      };
      channel.send({embeds: [embed], components: [btn]});
      i.reply({content: 'Challenge submitted for review', ephemeral: true});
    }
  }

  if (interaction.isButton()) {
    const i = interaction as ButtonInteraction;
    const guildId = i.guildId as string;
    if (i.customId === 'approveChallenge' || i.customId === 'rejectChallenge') {
      console.log('Checking if challenge review roles are set . . .');
      await setInitialChallengeRolesIfNotExisting(i);
    }

    if (interaction.customId === 'approveChallenge') {
      const member = i.member as GuildMember;
      const userId: string = member.user.id;
      const guild = i.guild;
      const user = await guild!.members.fetch(userId);
      const hasChallengeReviewPermission = await userHasChallengeReviewPermission(user, interaction.member.guild.ownerId, guildId);
      if (!hasChallengeReviewPermission) {
        return i.reply({content: 'You do not have a permission to review challenges', ephemeral: true});
      }

      const challengesChannel = await Flashcore.get('challenges-channel', {
        namespace: i.guildId!
      }) as string;
      if (!challengesChannel || challengesChannel.length < 1) {
        return interaction.reply({content: 'No challenges channel set. Please use `set-challenges-channel` command to set a channel for challenges reviews.', ephemeral: true});
      }
      const channelParsed = JSON.parse(challengesChannel);
      interaction.update({content: 'Challenge Approved', components: []});
      const messageEmbedContent = interaction.message.embeds[0];
      const channel = interaction.member.guild.channels.cache.get(channelParsed.id);
      return channel.send({embeds: [messageEmbedContent]});
    }

    if (i.customId === 'rejectChallenge') {
      const member = i.member as GuildMember;
      const userId: string = member.user.id;
      const guild = i.guild;
      const user = await guild!.members.fetch(userId);
      const hasChallengeReviewPermission = await userHasChallengeReviewPermission(user, interaction.member.guild.ownerId, guildId);
      if (!hasChallengeReviewPermission) {
        return i.reply({content: 'You do not have a permission to review challenges', ephemeral: true});
      }

      return interaction.update({content: 'Challenge Rejected', components: []});
    }
  }
}
