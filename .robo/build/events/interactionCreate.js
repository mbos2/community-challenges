import { Flashcore } from "@roboplay/robo.js";
import { challengeReviewButtonComponent, setInitialChallengeRolesIfNotExisting, userHasChallengeReviewPermission } from "../utils/utils.js";
export default (async (interaction)=>{
    if (interaction.isModalSubmit()) {
        const i = interaction;
        if (i.customId === 'challenge-modal') {
            const reviewsChannel = await Flashcore.get('challenges-review-channel', {
                namespace: i.guildId
            });
            if (!reviewsChannel) {
                return i.reply({
                    content: 'No challenges review channel set. Please use `set-challenges-review-channel` command to set a channel for challenges reviews.',
                    ephemeral: true
                });
            }
            const btn = challengeReviewButtonComponent();
            const channelParsed = JSON.parse(reviewsChannel);
            const fields = i.fields.fields;
            const member = i.member;
            const channel = member.guild.channels.cache.get(channelParsed.id);
            const challenge = fields.get('challenge').value;
            const embed = {
                title: 'Challenge submission',
                description: challenge,
                color: 0x0099ff,
                timestamp: new Date(),
                footer: {
                    text: `Submitted by ${member.user.username}`
                }
            };
            channel.send({
                embeds: [
                    embed
                ],
                components: [
                    btn
                ]
            });
            i.reply({
                content: 'Challenge submitted for review',
                ephemeral: true
            });
        }
    }
    if (interaction.isButton()) {
        const i = interaction;
        const guildId = i.guildId;
        if (i.customId === 'approveChallenge' || i.customId === 'rejectChallenge') {
            console.log('Checking if challenge review roles are set . . .');
            await setInitialChallengeRolesIfNotExisting(i);
        }
        if (interaction.customId === 'approveChallenge') {
            const member = i.member;
            const userId = member.user.id;
            const guild = i.guild;
            const user = await guild.members.fetch(userId);
            const hasChallengeReviewPermission = await userHasChallengeReviewPermission(user, interaction.member.guild.ownerId, guildId);
            if (!hasChallengeReviewPermission) {
                return i.reply({
                    content: 'You do not have a permission to review challenges',
                    ephemeral: true
                });
            }
            const challengesChannel = await Flashcore.get('challenges-channel', {
                namespace: i.guildId
            });
            if (!challengesChannel || challengesChannel.length < 1) {
                return interaction.reply({
                    content: 'No challenges channel set. Please use `set-challenges-channel` command to set a channel for challenges reviews.',
                    ephemeral: true
                });
            }
            const channelParsed = JSON.parse(challengesChannel);
            interaction.update({
                content: 'Challenge Approved',
                components: []
            });
            const messageEmbedContent = interaction.message.embeds[0];
            const channel = interaction.member.guild.channels.cache.get(channelParsed.id);
            return channel.send({
                embeds: [
                    messageEmbedContent
                ]
            });
        }
        if (i.customId === 'rejectChallenge') {
            const member = i.member;
            const userId = member.user.id;
            const guild = i.guild;
            const user = await guild.members.fetch(userId);
            const hasChallengeReviewPermission = await userHasChallengeReviewPermission(user, interaction.member.guild.ownerId, guildId);
            if (!hasChallengeReviewPermission) {
                return i.reply({
                    content: 'You do not have a permission to review challenges',
                    ephemeral: true
                });
            }
            return interaction.update({
                content: 'Challenge Rejected',
                components: []
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGV2ZW50c1xcaW50ZXJhY3Rpb25DcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQsIHNldEluaXRpYWxDaGFsbGVuZ2VSb2xlc0lmTm90RXhpc3RpbmcsIHVzZXJIYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgeyBCdXR0b25JbnRlcmFjdGlvbiwgR3VpbGRNZW1iZXIsIE1vZGFsU3VibWl0SW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvbi5pc01vZGFsU3VibWl0KCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbnRlcmFjdGlvbiBhcyBNb2RhbFN1Ym1pdEludGVyYWN0aW9uO1xyXG4gICAgaWYgKGkuY3VzdG9tSWQgPT09ICdjaGFsbGVuZ2UtbW9kYWwnKSB7XHJcbiAgICAgIGNvbnN0IHJldmlld3NDaGFubmVsOiBzdHJpbmcgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsJywge1xyXG4gICAgICAgIG5hbWVzcGFjZTogaS5ndWlsZElkIVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmV2aWV3c0NoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gaS5yZXBseSh7Y29udGVudDogJ05vIGNoYWxsZW5nZXMgcmV2aWV3IGNoYW5uZWwgc2V0LiBQbGVhc2UgdXNlIGBzZXQtY2hhbGxlbmdlcy1yZXZpZXctY2hhbm5lbGAgY29tbWFuZCB0byBzZXQgYSBjaGFubmVsIGZvciBjaGFsbGVuZ2VzIHJldmlld3MuJywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ0biA9IGNoYWxsZW5nZVJldmlld0J1dHRvbkNvbXBvbmVudCgpO1xyXG4gICAgICBjb25zdCBjaGFubmVsUGFyc2VkID0gSlNPTi5wYXJzZShyZXZpZXdzQ2hhbm5lbCk7XHJcbiAgICAgIGNvbnN0IGZpZWxkcyA9IGkuZmllbGRzLmZpZWxkcyBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IG1lbWJlciA9IGkubWVtYmVyIGFzIEd1aWxkTWVtYmVyO1xyXG4gICAgICBjb25zdCBjaGFubmVsID0gbWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmdldChjaGFubmVsUGFyc2VkLmlkKSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGZpZWxkcy5nZXQoJ2NoYWxsZW5nZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbWJlZCA9IHtcclxuICAgICAgICB0aXRsZTogJ0NoYWxsZW5nZSBzdWJtaXNzaW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogY2hhbGxlbmdlLFxyXG4gICAgICAgIGNvbG9yOiAweDAwOTlmZixcclxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICB0ZXh0OiBgU3VibWl0dGVkIGJ5ICR7bWVtYmVyLnVzZXIudXNlcm5hbWV9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBjaGFubmVsLnNlbmQoe2VtYmVkczogW2VtYmVkXSwgY29tcG9uZW50czogW2J0bl19KTtcclxuICAgICAgaS5yZXBseSh7Y29udGVudDogJ0NoYWxsZW5nZSBzdWJtaXR0ZWQgZm9yIHJldmlldycsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGludGVyYWN0aW9uLmlzQnV0dG9uKCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbnRlcmFjdGlvbiBhcyBCdXR0b25JbnRlcmFjdGlvbjtcclxuICAgIGNvbnN0IGd1aWxkSWQgPSBpLmd1aWxkSWQgYXMgc3RyaW5nO1xyXG4gICAgaWYgKGkuY3VzdG9tSWQgPT09ICdhcHByb3ZlQ2hhbGxlbmdlJyB8fCBpLmN1c3RvbUlkID09PSAncmVqZWN0Q2hhbGxlbmdlJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgaWYgY2hhbGxlbmdlIHJldmlldyByb2xlcyBhcmUgc2V0IC4gLiAuJyk7XHJcbiAgICAgIGF3YWl0IHNldEluaXRpYWxDaGFsbGVuZ2VSb2xlc0lmTm90RXhpc3RpbmcoaSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGludGVyYWN0aW9uLmN1c3RvbUlkID09PSAnYXBwcm92ZUNoYWxsZW5nZScpIHtcclxuICAgICAgY29uc3QgbWVtYmVyID0gaS5tZW1iZXIgYXMgR3VpbGRNZW1iZXI7XHJcbiAgICAgIGNvbnN0IHVzZXJJZDogc3RyaW5nID0gbWVtYmVyLnVzZXIuaWQ7XHJcbiAgICAgIGNvbnN0IGd1aWxkID0gaS5ndWlsZDtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGd1aWxkIS5tZW1iZXJzLmZldGNoKHVzZXJJZCk7XHJcbiAgICAgIGNvbnN0IGhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24gPSBhd2FpdCB1c2VySGFzQ2hhbGxlbmdlUmV2aWV3UGVybWlzc2lvbih1c2VyLCBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQub3duZXJJZCwgZ3VpbGRJZCk7XHJcbiAgICAgIGlmICghaGFzQ2hhbGxlbmdlUmV2aWV3UGVybWlzc2lvbikge1xyXG4gICAgICAgIHJldHVybiBpLnJlcGx5KHtjb250ZW50OiAnWW91IGRvIG5vdCBoYXZlIGEgcGVybWlzc2lvbiB0byByZXZpZXcgY2hhbGxlbmdlcycsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjaGFsbGVuZ2VzQ2hhbm5lbCA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtY2hhbm5lbCcsIHtcclxuICAgICAgICBuYW1lc3BhY2U6IGkuZ3VpbGRJZCFcclxuICAgICAgfSkgYXMgc3RyaW5nO1xyXG4gICAgICBpZiAoIWNoYWxsZW5nZXNDaGFubmVsIHx8IGNoYWxsZW5nZXNDaGFubmVsLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm4gaW50ZXJhY3Rpb24ucmVwbHkoe2NvbnRlbnQ6ICdObyBjaGFsbGVuZ2VzIGNoYW5uZWwgc2V0LiBQbGVhc2UgdXNlIGBzZXQtY2hhbGxlbmdlcy1jaGFubmVsYCBjb21tYW5kIHRvIHNldCBhIGNoYW5uZWwgZm9yIGNoYWxsZW5nZXMgcmV2aWV3cy4nLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjaGFubmVsUGFyc2VkID0gSlNPTi5wYXJzZShjaGFsbGVuZ2VzQ2hhbm5lbCk7XHJcbiAgICAgIGludGVyYWN0aW9uLnVwZGF0ZSh7Y29udGVudDogJ0NoYWxsZW5nZSBBcHByb3ZlZCcsIGNvbXBvbmVudHM6IFtdfSk7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VFbWJlZENvbnRlbnQgPSBpbnRlcmFjdGlvbi5tZXNzYWdlLmVtYmVkc1swXTtcclxuICAgICAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm1lbWJlci5ndWlsZC5jaGFubmVscy5jYWNoZS5nZXQoY2hhbm5lbFBhcnNlZC5pZCk7XHJcbiAgICAgIHJldHVybiBjaGFubmVsLnNlbmQoe2VtYmVkczogW21lc3NhZ2VFbWJlZENvbnRlbnRdfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGkuY3VzdG9tSWQgPT09ICdyZWplY3RDaGFsbGVuZ2UnKSB7XHJcbiAgICAgIGNvbnN0IG1lbWJlciA9IGkubWVtYmVyIGFzIEd1aWxkTWVtYmVyO1xyXG4gICAgICBjb25zdCB1c2VySWQ6IHN0cmluZyA9IG1lbWJlci51c2VyLmlkO1xyXG4gICAgICBjb25zdCBndWlsZCA9IGkuZ3VpbGQ7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBndWlsZCEubWVtYmVycy5mZXRjaCh1c2VySWQpO1xyXG4gICAgICBjb25zdCBoYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uID0gYXdhaXQgdXNlckhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24odXNlciwgaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLm93bmVySWQsIGd1aWxkSWQpO1xyXG4gICAgICBpZiAoIWhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gaS5yZXBseSh7Y29udGVudDogJ1lvdSBkbyBub3QgaGF2ZSBhIHBlcm1pc3Npb24gdG8gcmV2aWV3IGNoYWxsZW5nZXMnLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGludGVyYWN0aW9uLnVwZGF0ZSh7Y29udGVudDogJ0NoYWxsZW5nZSBSZWplY3RlZCcsIGNvbXBvbmVudHM6IFtdfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQiLCJzZXRJbml0aWFsQ2hhbGxlbmdlUm9sZXNJZk5vdEV4aXN0aW5nIiwidXNlckhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24iLCJpbnRlcmFjdGlvbiIsImlzTW9kYWxTdWJtaXQiLCJpIiwiY3VzdG9tSWQiLCJyZXZpZXdzQ2hhbm5lbCIsImdldCIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJyZXBseSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJidG4iLCJjaGFubmVsUGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiZmllbGRzIiwibWVtYmVyIiwiY2hhbm5lbCIsImd1aWxkIiwiY2hhbm5lbHMiLCJjYWNoZSIsImlkIiwiY2hhbGxlbmdlIiwidmFsdWUiLCJlbWJlZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb2xvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJmb290ZXIiLCJ0ZXh0IiwidXNlciIsInVzZXJuYW1lIiwic2VuZCIsImVtYmVkcyIsImNvbXBvbmVudHMiLCJpc0J1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJtZW1iZXJzIiwiZmV0Y2giLCJoYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uIiwib3duZXJJZCIsImNoYWxsZW5nZXNDaGFubmVsIiwibGVuZ3RoIiwidXBkYXRlIiwibWVzc2FnZUVtYmVkQ29udGVudCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSxvQkFBb0I7QUFDOUMsU0FBU0MsOEJBQThCLEVBQUVDLHFDQUFxQyxFQUFFQyxnQ0FBZ0MsUUFBUSxvQkFBb0I7QUFHNUksZUFBZSxDQUFBLE9BQU9DO0lBRXBCLElBQUlBLFlBQVlDLGFBQWEsSUFBSTtRQUMvQixNQUFNQyxJQUFJRjtRQUNWLElBQUlFLEVBQUVDLFFBQVEsS0FBSyxtQkFBbUI7WUFDcEMsTUFBTUMsaUJBQXlCLE1BQU1SLFVBQVVTLEdBQUcsQ0FBQyw2QkFBNkI7Z0JBQzlFQyxXQUFXSixFQUFFSyxPQUFPO1lBQ3RCO1lBRUEsSUFBSSxDQUFDSCxnQkFBZ0I7Z0JBQ25CLE9BQU9GLEVBQUVNLEtBQUssQ0FBQztvQkFBQ0MsU0FBUztvQkFBaUlDLFdBQVc7Z0JBQUk7WUFDM0s7WUFFQSxNQUFNQyxNQUFNZDtZQUNaLE1BQU1lLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDVjtZQUNqQyxNQUFNVyxTQUFTYixFQUFFYSxNQUFNLENBQUNBLE1BQU07WUFDOUIsTUFBTUMsU0FBU2QsRUFBRWMsTUFBTTtZQUN2QixNQUFNQyxVQUFVRCxPQUFPRSxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDZixHQUFHLENBQUNPLGNBQWNTLEVBQUU7WUFDaEUsTUFBTUMsWUFBWVAsT0FBT1YsR0FBRyxDQUFDLGFBQWFrQixLQUFLO1lBQy9DLE1BQU1DLFFBQVE7Z0JBQ1pDLE9BQU87Z0JBQ1BD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