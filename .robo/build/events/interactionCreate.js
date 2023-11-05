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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGV2ZW50c1xcaW50ZXJhY3Rpb25DcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQsIHNldEluaXRpYWxDaGFsbGVuZ2VSb2xlc0lmTm90RXhpc3RpbmcsIHVzZXJIYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgeyBCdXR0b25JbnRlcmFjdGlvbiwgR3VpbGRNZW1iZXIsIE1vZGFsU3VibWl0SW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvbi5pc01vZGFsU3VibWl0KCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbnRlcmFjdGlvbiBhcyBNb2RhbFN1Ym1pdEludGVyYWN0aW9uO1xyXG5cclxuICAgIGlmIChpLmN1c3RvbUlkID09PSAnY2hhbGxlbmdlLW1vZGFsJykge1xyXG4gICAgICBjb25zdCByZXZpZXdzQ2hhbm5lbDogc3RyaW5nID0gYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1yZXZpZXctY2hhbm5lbCcsIHtcclxuICAgICAgICBuYW1lc3BhY2U6IGkuZ3VpbGRJZCFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJldmlld3NDaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGkucmVwbHkoe2NvbnRlbnQ6ICdObyBjaGFsbGVuZ2VzIHJldmlldyBjaGFubmVsIHNldC4gUGxlYXNlIHVzZSBgc2V0LWNoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWxgIGNvbW1hbmQgdG8gc2V0IGEgY2hhbm5lbCBmb3IgY2hhbGxlbmdlcyByZXZpZXdzLicsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBidG4gPSBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQoKTtcclxuICAgICAgY29uc3QgY2hhbm5lbFBhcnNlZCA9IEpTT04ucGFyc2UocmV2aWV3c0NoYW5uZWwpO1xyXG4gICAgICBjb25zdCBmaWVsZHMgPSBpLmZpZWxkcy5maWVsZHMgYXMgYW55O1xyXG4gICAgICBjb25zdCBtZW1iZXIgPSBpLm1lbWJlciBhcyBHdWlsZE1lbWJlcjtcclxuICAgICAgY29uc3QgY2hhbm5lbCA9IG1lbWJlci5ndWlsZC5jaGFubmVscy5jYWNoZS5nZXQoY2hhbm5lbFBhcnNlZC5pZCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjaGFsbGVuZ2UgPSBmaWVsZHMuZ2V0KCdjaGFsbGVuZ2UnKS52YWx1ZTtcclxuICAgICAgY29uc3QgZW1iZWQgPSB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGFsbGVuZ2Ugc3VibWlzc2lvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGNoYWxsZW5nZSxcclxuICAgICAgICBjb2xvcjogMHgwMDk5ZmYsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgdGV4dDogYFN1Ym1pdHRlZCBieSAke21lbWJlci51c2VyLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgY2hhbm5lbC5zZW5kKHtlbWJlZHM6IFtlbWJlZF0sIGNvbXBvbmVudHM6IFtidG5dfSk7XHJcbiAgICAgIGkucmVwbHkoe2NvbnRlbnQ6ICdDaGFsbGVuZ2Ugc3VibWl0dGVkIGZvciByZXZpZXcnLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvbi5pc0J1dHRvbigpKSB7XHJcbiAgICBjb25zdCBpID0gaW50ZXJhY3Rpb24gYXMgQnV0dG9uSW50ZXJhY3Rpb247XHJcbiAgICBjb25zdCBndWlsZElkID0gaS5ndWlsZElkIGFzIHN0cmluZztcclxuICAgIGlmIChpLmN1c3RvbUlkID09PSAnYXBwcm92ZUNoYWxsZW5nZScgfHwgaS5jdXN0b21JZCA9PT0gJ3JlamVjdENoYWxsZW5nZScpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0NoZWNraW5nIGlmIGNoYWxsZW5nZSByZXZpZXcgcm9sZXMgYXJlIHNldCAuIC4gLicpO1xyXG4gICAgICBhd2FpdCBzZXRJbml0aWFsQ2hhbGxlbmdlUm9sZXNJZk5vdEV4aXN0aW5nKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnRlcmFjdGlvbi5jdXN0b21JZCA9PT0gJ2FwcHJvdmVDaGFsbGVuZ2UnKSB7XHJcbiAgICAgIGNvbnN0IG1lbWJlciA9IGkubWVtYmVyIGFzIEd1aWxkTWVtYmVyO1xyXG4gICAgICBjb25zdCB1c2VySWQ6IHN0cmluZyA9IG1lbWJlci51c2VyLmlkO1xyXG4gICAgICBjb25zdCBndWlsZCA9IGkuZ3VpbGQ7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBndWlsZCEubWVtYmVycy5mZXRjaCh1c2VySWQpO1xyXG4gICAgICBjb25zdCBoYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uID0gYXdhaXQgdXNlckhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24odXNlciwgaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLm93bmVySWQsIGd1aWxkSWQpO1xyXG4gICAgICBpZiAoIWhhc0NoYWxsZW5nZVJldmlld1Blcm1pc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gaS5yZXBseSh7Y29udGVudDogJ1lvdSBkbyBub3QgaGF2ZSBhIHBlcm1pc3Npb24gdG8gcmV2aWV3IGNoYWxsZW5nZXMnLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hhbGxlbmdlc0NoYW5uZWwgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWNoYW5uZWwnLCB7XHJcbiAgICAgICAgbmFtZXNwYWNlOiBpLmd1aWxkSWQhXHJcbiAgICAgIH0pIGFzIHN0cmluZztcclxuICAgICAgaWYgKCFjaGFsbGVuZ2VzQ2hhbm5lbCB8fCBjaGFsbGVuZ2VzQ2hhbm5lbC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGludGVyYWN0aW9uLnJlcGx5KHtjb250ZW50OiAnTm8gY2hhbGxlbmdlcyBjaGFubmVsIHNldC4gUGxlYXNlIHVzZSBgc2V0LWNoYWxsZW5nZXMtY2hhbm5lbGAgY29tbWFuZCB0byBzZXQgYSBjaGFubmVsIGZvciBjaGFsbGVuZ2VzIHJldmlld3MuJywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2hhbm5lbFBhcnNlZCA9IEpTT04ucGFyc2UoY2hhbGxlbmdlc0NoYW5uZWwpO1xyXG4gICAgICBpbnRlcmFjdGlvbi51cGRhdGUoe2NvbnRlbnQ6ICdDaGFsbGVuZ2UgQXBwcm92ZWQnLCBjb21wb25lbnRzOiBbXX0pO1xyXG4gICAgICBjb25zdCBtZXNzYWdlRW1iZWRDb250ZW50ID0gaW50ZXJhY3Rpb24ubWVzc2FnZS5lbWJlZHNbMF07XHJcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQuY2hhbm5lbHMuY2FjaGUuZ2V0KGNoYW5uZWxQYXJzZWQuaWQpO1xyXG4gICAgICByZXR1cm4gY2hhbm5lbC5zZW5kKHtlbWJlZHM6IFttZXNzYWdlRW1iZWRDb250ZW50XX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpLmN1c3RvbUlkID09PSAncmVqZWN0Q2hhbGxlbmdlJykge1xyXG4gICAgICBjb25zdCBtZW1iZXIgPSBpLm1lbWJlciBhcyBHdWlsZE1lbWJlcjtcclxuICAgICAgY29uc3QgdXNlcklkOiBzdHJpbmcgPSBtZW1iZXIudXNlci5pZDtcclxuICAgICAgY29uc3QgZ3VpbGQgPSBpLmd1aWxkO1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ3VpbGQhLm1lbWJlcnMuZmV0Y2godXNlcklkKTtcclxuICAgICAgY29uc3QgaGFzQ2hhbGxlbmdlUmV2aWV3UGVybWlzc2lvbiA9IGF3YWl0IHVzZXJIYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uKHVzZXIsIGludGVyYWN0aW9uLm1lbWJlci5ndWlsZC5vd25lcklkLCBndWlsZElkKTtcclxuICAgICAgaWYgKCFoYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGkucmVwbHkoe2NvbnRlbnQ6ICdZb3UgZG8gbm90IGhhdmUgYSBwZXJtaXNzaW9uIHRvIHJldmlldyBjaGFsbGVuZ2VzJywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpbnRlcmFjdGlvbi51cGRhdGUoe2NvbnRlbnQ6ICdDaGFsbGVuZ2UgUmVqZWN0ZWQnLCBjb21wb25lbnRzOiBbXX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY2hhbGxlbmdlUmV2aWV3QnV0dG9uQ29tcG9uZW50Iiwic2V0SW5pdGlhbENoYWxsZW5nZVJvbGVzSWZOb3RFeGlzdGluZyIsInVzZXJIYXNDaGFsbGVuZ2VSZXZpZXdQZXJtaXNzaW9uIiwiaW50ZXJhY3Rpb24iLCJpc01vZGFsU3VibWl0IiwiaSIsImN1c3RvbUlkIiwicmV2aWV3c0NoYW5uZWwiLCJnZXQiLCJuYW1lc3BhY2UiLCJndWlsZElkIiwicmVwbHkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiYnRuIiwiY2hhbm5lbFBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImZpZWxkcyIsIm1lbWJlciIsImNoYW5uZWwiLCJndWlsZCIsImNoYW5uZWxzIiwiY2FjaGUiLCJpZCIsImNoYWxsZW5nZSIsInZhbHVlIiwiZW1iZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZm9vdGVyIiwidGV4dCIsInVzZXIiLCJ1c2VybmFtZSIsInNlbmQiLCJlbWJlZHMiLCJjb21wb25lbnRzIiwiaXNCdXR0b24iLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwibWVtYmVycyIsImZldGNoIiwiaGFzQ2hhbGxlbmdlUmV2aWV3UGVybWlzc2lvbiIsIm93bmVySWQiLCJjaGFsbGVuZ2VzQ2hhbm5lbCIsImxlbmd0aCIsInVwZGF0ZSIsIm1lc3NhZ2VFbWJlZENvbnRlbnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQVEsb0JBQW9CO0FBQzlDLFNBQVNDLDhCQUE4QixFQUFFQyxxQ0FBcUMsRUFBRUMsZ0NBQWdDLFFBQVEsb0JBQW9CO0FBRzVJLGVBQWUsQ0FBQSxPQUFPQztJQUVwQixJQUFJQSxZQUFZQyxhQUFhLElBQUk7UUFDL0IsTUFBTUMsSUFBSUY7UUFFVixJQUFJRSxFQUFFQyxRQUFRLEtBQUssbUJBQW1CO1lBQ3BDLE1BQU1DLGlCQUF5QixNQUFNUixVQUFVUyxHQUFHLENBQUMsNkJBQTZCO2dCQUM5RUMsV0FBV0osRUFBRUssT0FBTztZQUN0QjtZQUVBLElBQUksQ0FBQ0gsZ0JBQWdCO2dCQUNuQixPQUFPRixFQUFFTSxLQUFLLENBQUM7b0JBQUNDLFNBQVM7b0JBQWlJQyxXQUFXO2dCQUFJO1lBQzNLO1lBRUEsTUFBTUMsTUFBTWQ7WUFDWixNQUFNZSxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQ1Y7WUFDakMsTUFBTVcsU0FBU2IsRUFBRWEsTUFBTSxDQUFDQSxNQUFNO1lBQzlCLE1BQU1DLFNBQVNkLEVBQUVjLE1BQU07WUFDdkIsTUFBTUMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQ2YsR0FBRyxDQUFDTyxjQUFjUyxFQUFFO1lBQ2hFLE1BQU1DLFlBQVlQLE9BQU9WLEdBQUcsQ0FBQyxhQUFha0IsS0FBSztZQUMvQyxNQUFNQyxRQUFRO2dCQUNaQyxPQUFPO2dCQUNQQyxhQUFhSjtnQkFDYkssT0FBTztnQkFDUEMsV0FBVyxJQUFJQztnQkFDZkMsUUFBUTtvQkFDTkMsTUFBTSxDQUFDLGFBQWEsRUFBRWYsT0FBT2dCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7Z0JBQzlDO1lBQ0Y7WUFDQWhCLFFBQVFpQixJQUFJLENBQUM7Z0JBQUNDLFFBQVE7b0JBQUNYO2lCQUFNO2dCQUFFWSxZQUFZO29CQUFDekI7aUJBQUk7WUFBQTtZQUNoRFQsRUFBRU0sS0FBSyxDQUFDO2dCQUFDQyxTQUFTO2dCQUFrQ0MsV0FBVztZQUFJO1FBQ3JFO0lBQ0Y7SUFFQSxJQUFJVixZQUFZcUMsUUFBUSxJQUFJO1FBQzFCLE1BQU1uQyxJQUFJRjtRQUNWLE1BQU1PLFVBQVVMLEVBQUVLLE9BQU87UUFDekIsSUFBSUwsRUFBRUMsUUFBUSxLQUFLLHNCQUFzQkQsRUFBRUMsUUFBUSxLQUFLLG1CQUFtQjtZQUN6RW1DLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU16QyxzQ0FBc0NJO1FBQzlDO1FBRUEsSUFBSUYsWUFBWUcsUUFBUSxLQUFLLG9CQUFvQjtZQUMvQyxNQUFNYSxTQUFTZCxFQUFFYyxNQUFNO1lBQ3ZCLE1BQU13QixTQUFpQnhCLE9BQU9nQixJQUFJLENBQUNYLEVBQUU7WUFDckMsTUFBTUgsUUFBUWhCLEVBQUVnQixLQUFLO1lBQ3JCLE1BQU1jLE9BQU8sTUFBTWQsTUFBT3VCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRjtZQUN4QyxNQUFNRywrQkFBK0IsTUFBTTVDLGlDQUFpQ2lDLE1BQU1oQyxZQUFZZ0IsTUFBTSxDQUFDRSxLQUFLLENBQUMwQixPQUFPLEVBQUVyQztZQUNwSCxJQUFJLENBQUNvQyw4QkFBOEI7Z0JBQ2pDLE9BQU96QyxFQUFFTSxLQUFLLENBQUM7b0JBQUNDLFNBQVM7b0JBQXFEQyxXQUFXO2dCQUFJO1lBQy9GO1lBRUEsTUFBTW1DLG9CQUFvQixNQUFNakQsVUFBVVMsR0FBRyxDQUFDLHNCQUFzQjtnQkFDbEVDLFdBQVdKLEVBQUVLLE9BQU87WUFDdEI7WUFDQSxJQUFJLENBQUNzQyxxQkFBcUJBLGtCQUFrQkMsTUFBTSxHQUFHLEdBQUc7Z0JBQ3RELE9BQU85QyxZQUFZUSxLQUFLLENBQUM7b0JBQUNDLFNBQVM7b0JBQW1IQyxXQUFXO2dCQUFJO1lBQ3ZLO1lBQ0EsTUFBTUUsZ0JBQWdCQyxLQUFLQyxLQUFLLENBQUMrQjtZQUNqQzdDLFlBQVkrQyxNQUFNLENBQUM7Z0JBQUN0QyxTQUFTO2dCQUFzQjJCLFlBQVksRUFBRTtZQUFBO1lBQ2pFLE1BQU1ZLHNCQUFzQmhELFlBQVlpRCxPQUFPLENBQUNkLE1BQU0sQ0FBQyxFQUFFO1lBQ3pELE1BQU1sQixVQUFVakIsWUFBWWdCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQ2YsR0FBRyxDQUFDTyxjQUFjUyxFQUFFO1lBQzVFLE9BQU9KLFFBQVFpQixJQUFJLENBQUM7Z0JBQUNDLFFBQVE7b0JBQUNhO2lCQUFvQjtZQUFBO1FBQ3BEO1FBRUEsSUFBSTlDLEVBQUVDLFFBQVEsS0FBSyxtQkFBbUI7WUFDcEMsTUFBTWEsU0FBU2QsRUFBRWMsTUFBTTtZQUN2QixNQUFNd0IsU0FBaUJ4QixPQUFPZ0IsSUFBSSxDQUFDWCxFQUFFO1lBQ3JDLE1BQU1ILFFBQVFoQixFQUFFZ0IsS0FBSztZQUNyQixNQUFNYyxPQUFPLE1BQU1kLE1BQU91QixPQUFPLENBQUNDLEtBQUssQ0FBQ0Y7WUFDeEMsTUFBTUcsK0JBQStCLE1BQU01QyxpQ0FBaUNpQyxNQUFNaEMsWUFBWWdCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDMEIsT0FBTyxFQUFFckM7WUFDcEgsSUFBSSxDQUFDb0MsOEJBQThCO2dCQUNqQyxPQUFPekMsRUFBRU0sS0FBSyxDQUFDO29CQUFDQyxTQUFTO29CQUFxREMsV0FBVztnQkFBSTtZQUMvRjtZQUVBLE9BQU9WLFlBQVkrQyxNQUFNLENBQUM7Z0JBQUN0QyxTQUFTO2dCQUFzQjJCLFlBQVksRUFBRTtZQUFBO1FBQzFFO0lBQ0Y7QUFDRixDQUFBLEVBQUMifQ==