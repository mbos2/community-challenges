import { Flashcore } from "@roboplay/robo.js";
import { challengeReviewButtonComponent, userHasPermission } from "../utils/utils.js";
export default (async (interaction)=>{
    if (interaction.isModalSubmit()) {
        const reviewsChannel = await Flashcore.get('challenges-review-channel');
        if (!reviewsChannel) {
            return interaction.reply({
                content: 'No review channel set. Please use `set-challenges-review-channel` command to set a channel for challenges reviews.',
                ephemeral: true
            });
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
                text: `Submitted by ${interaction.member.user.username}`
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
        interaction.reply({
            content: 'Challenge submitted for review',
            ephemeral: true
        });
    }
    if (interaction.isButton()) {
        const userId = interaction.member.user.id;
        const user = await interaction.guild.members.fetch(userId);
        const hasPermission = await userHasPermission(user, interaction.member.guild.ownerId);
        if (hasPermission) {
            if (interaction.customId === 'approveChallenge') {
                const challengesChannel = await Flashcore.get('challenges-channel');
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
            if (interaction.customId === 'rejectChallenge') {
                interaction.update({
                    content: 'Challenge Rejected',
                    components: []
                });
            }
        } else {
            interaction.reply({
                content: 'You do not have permission to review challenges',
                ephemeral: true
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcZXZlbnRzXFxpbnRlcmFjdGlvbkNyZWF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IGNoYWxsZW5nZVJldmlld0J1dHRvbkNvbXBvbmVudCwgdXNlckhhc1Blcm1pc3Npb24gfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IGFueSkgPT4ge1xyXG4gIGlmIChpbnRlcmFjdGlvbi5pc01vZGFsU3VibWl0KCkpIHtcclxuICAgICAgY29uc3QgcmV2aWV3c0NoYW5uZWw6IHN0cmluZyA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWwnKTtcclxuICAgICAgaWYgKCFyZXZpZXdzQ2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiBpbnRlcmFjdGlvbi5yZXBseSh7Y29udGVudDogJ05vIHJldmlldyBjaGFubmVsIHNldC4gUGxlYXNlIHVzZSBgc2V0LWNoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWxgIGNvbW1hbmQgdG8gc2V0IGEgY2hhbm5lbCBmb3IgY2hhbGxlbmdlcyByZXZpZXdzLicsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJ0biA9IGNoYWxsZW5nZVJldmlld0J1dHRvbkNvbXBvbmVudCgpO1xyXG4gICAgICBjb25zdCBjaGFubmVsUGFyc2VkID0gSlNPTi5wYXJzZShyZXZpZXdzQ2hhbm5lbCk7XHJcbiAgICAgIGNvbnN0IGZpZWxkcyA9IGludGVyYWN0aW9uLmZpZWxkcy5maWVsZHM7XHJcbiAgICAgIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQuY2hhbm5lbHMuY2FjaGUuZ2V0KGNoYW5uZWxQYXJzZWQuaWQpO1xyXG4gICAgICBjb25zdCBjaGFsbGVuZ2UgPSBmaWVsZHMuZ2V0KCdjaGFsbGVuZ2UnKS52YWx1ZTtcclxuICAgICAgY29uc3QgZW1iZWQgPSB7XHJcbiAgICAgICAgdGl0bGU6ICdDaGFsbGVuZ2Ugc3VibWlzc2lvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGNoYWxsZW5nZSxcclxuICAgICAgICBjb2xvcjogMHgwMDk5ZmYsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgdGV4dDogYFN1Ym1pdHRlZCBieSAke2ludGVyYWN0aW9uLm1lbWJlci51c2VyLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgY2hhbm5lbC5zZW5kKHtlbWJlZHM6IFtlbWJlZF0sIGNvbXBvbmVudHM6IFtidG5dfSk7XHJcbiAgICAgIGludGVyYWN0aW9uLnJlcGx5KHtjb250ZW50OiAnQ2hhbGxlbmdlIHN1Ym1pdHRlZCBmb3IgcmV2aWV3JywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW50ZXJhY3Rpb24uaXNCdXR0b24oKSkge1xyXG4gICAgY29uc3QgdXNlcklkID0gaW50ZXJhY3Rpb24ubWVtYmVyLnVzZXIuaWQ7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgaW50ZXJhY3Rpb24uZ3VpbGQubWVtYmVycy5mZXRjaCh1c2VySWQpO1xyXG4gICAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGF3YWl0IHVzZXJIYXNQZXJtaXNzaW9uKHVzZXIsIGludGVyYWN0aW9uLm1lbWJlci5ndWlsZC5vd25lcklkKTtcclxuXHJcbiAgICBpZiAoaGFzUGVybWlzc2lvbikge1xyXG4gICAgICBpZiAoaW50ZXJhY3Rpb24uY3VzdG9tSWQgPT09ICdhcHByb3ZlQ2hhbGxlbmdlJykge1xyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZXNDaGFubmVsID0gYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1jaGFubmVsJykgYXMgc3RyaW5nO1xyXG4gICAgICAgIGlmICghY2hhbGxlbmdlc0NoYW5uZWwgfHwgY2hhbGxlbmdlc0NoYW5uZWwubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGludGVyYWN0aW9uLnJlcGx5KHtjb250ZW50OiAnTm8gY2hhbGxlbmdlcyBjaGFubmVsIHNldC4gUGxlYXNlIHVzZSBgc2V0LWNoYWxsZW5nZXMtY2hhbm5lbGAgY29tbWFuZCB0byBzZXQgYSBjaGFubmVsIGZvciBjaGFsbGVuZ2VzIHJldmlld3MuJywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoYW5uZWxQYXJzZWQgPSBKU09OLnBhcnNlKGNoYWxsZW5nZXNDaGFubmVsKTtcclxuICAgICAgICBpbnRlcmFjdGlvbi51cGRhdGUoe2NvbnRlbnQ6ICdDaGFsbGVuZ2UgQXBwcm92ZWQnLCBjb21wb25lbnRzOiBbXX0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VFbWJlZENvbnRlbnQgPSBpbnRlcmFjdGlvbi5tZXNzYWdlLmVtYmVkc1swXTtcclxuICAgICAgICBjb25zdCBjaGFubmVsID0gaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmdldChjaGFubmVsUGFyc2VkLmlkKTtcclxuICAgICAgICByZXR1cm4gY2hhbm5lbC5zZW5kKHtlbWJlZHM6IFttZXNzYWdlRW1iZWRDb250ZW50XX0pO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChpbnRlcmFjdGlvbi5jdXN0b21JZCA9PT0gJ3JlamVjdENoYWxsZW5nZScpIHtcclxuICAgICAgICBpbnRlcmFjdGlvbi51cGRhdGUoe2NvbnRlbnQ6ICdDaGFsbGVuZ2UgUmVqZWN0ZWQnLCBjb21wb25lbnRzOiBbXX0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnRlcmFjdGlvbi5yZXBseSh7Y29udGVudDogJ1lvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHJldmlldyBjaGFsbGVuZ2VzJywgZXBoZW1lcmFsOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQiLCJ1c2VySGFzUGVybWlzc2lvbiIsImludGVyYWN0aW9uIiwiaXNNb2RhbFN1Ym1pdCIsInJldmlld3NDaGFubmVsIiwiZ2V0IiwicmVwbHkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiYnRuIiwiY2hhbm5lbFBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImZpZWxkcyIsImNoYW5uZWwiLCJtZW1iZXIiLCJndWlsZCIsImNoYW5uZWxzIiwiY2FjaGUiLCJpZCIsImNoYWxsZW5nZSIsInZhbHVlIiwiZW1iZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZm9vdGVyIiwidGV4dCIsInVzZXIiLCJ1c2VybmFtZSIsInNlbmQiLCJlbWJlZHMiLCJjb21wb25lbnRzIiwiaXNCdXR0b24iLCJ1c2VySWQiLCJtZW1iZXJzIiwiZmV0Y2giLCJoYXNQZXJtaXNzaW9uIiwib3duZXJJZCIsImN1c3RvbUlkIiwiY2hhbGxlbmdlc0NoYW5uZWwiLCJsZW5ndGgiLCJ1cGRhdGUiLCJtZXNzYWdlRW1iZWRDb250ZW50IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUFRLG9CQUFvQjtBQUM5QyxTQUFTQyw4QkFBOEIsRUFBRUMsaUJBQWlCLFFBQVEsb0JBQW9CO0FBRXRGLGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJQSxZQUFZQyxhQUFhLElBQUk7UUFDN0IsTUFBTUMsaUJBQXlCLE1BQU1MLFVBQVVNLEdBQUcsQ0FBQztRQUNuRCxJQUFJLENBQUNELGdCQUFnQjtZQUNuQixPQUFPRixZQUFZSSxLQUFLLENBQUM7Z0JBQUNDLFNB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