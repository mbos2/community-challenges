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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGV2ZW50c1xcaW50ZXJhY3Rpb25DcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQsIHVzZXJIYXNQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICBpZiAoaW50ZXJhY3Rpb24uaXNNb2RhbFN1Ym1pdCgpKSB7XHJcbiAgICAgIGNvbnN0IHJldmlld3NDaGFubmVsOiBzdHJpbmcgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsJyk7XHJcbiAgICAgIGlmICghcmV2aWV3c0NoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gaW50ZXJhY3Rpb24ucmVwbHkoe2NvbnRlbnQ6ICdObyByZXZpZXcgY2hhbm5lbCBzZXQuIFBsZWFzZSB1c2UgYHNldC1jaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsYCBjb21tYW5kIHRvIHNldCBhIGNoYW5uZWwgZm9yIGNoYWxsZW5nZXMgcmV2aWV3cy4nLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBidG4gPSBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQoKTtcclxuICAgICAgY29uc3QgY2hhbm5lbFBhcnNlZCA9IEpTT04ucGFyc2UocmV2aWV3c0NoYW5uZWwpO1xyXG4gICAgICBjb25zdCBmaWVsZHMgPSBpbnRlcmFjdGlvbi5maWVsZHMuZmllbGRzO1xyXG4gICAgICBjb25zdCBjaGFubmVsID0gaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmdldChjaGFubmVsUGFyc2VkLmlkKTtcclxuICAgICAgY29uc3QgY2hhbGxlbmdlID0gZmllbGRzLmdldCgnY2hhbGxlbmdlJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVtYmVkID0ge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hhbGxlbmdlIHN1Ym1pc3Npb24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjaGFsbGVuZ2UsXHJcbiAgICAgICAgY29sb3I6IDB4MDA5OWZmLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgIHRleHQ6IGBTdWJtaXR0ZWQgYnkgJHtpbnRlcmFjdGlvbi5tZW1iZXIudXNlci51c2VybmFtZX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGNoYW5uZWwuc2VuZCh7ZW1iZWRzOiBbZW1iZWRdLCBjb21wb25lbnRzOiBbYnRuXX0pO1xyXG4gICAgICBpbnRlcmFjdGlvbi5yZXBseSh7Y29udGVudDogJ0NoYWxsZW5nZSBzdWJtaXR0ZWQgZm9yIHJldmlldycsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGludGVyYWN0aW9uLmlzQnV0dG9uKCkpIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGludGVyYWN0aW9uLm1lbWJlci51c2VyLmlkO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGludGVyYWN0aW9uLmd1aWxkLm1lbWJlcnMuZmV0Y2godXNlcklkKTtcclxuICAgIGNvbnN0IGhhc1Blcm1pc3Npb24gPSBhd2FpdCB1c2VySGFzUGVybWlzc2lvbih1c2VyLCBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQub3duZXJJZCk7XHJcblxyXG4gICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcclxuICAgICAgaWYgKGludGVyYWN0aW9uLmN1c3RvbUlkID09PSAnYXBwcm92ZUNoYWxsZW5nZScpIHtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2VzQ2hhbm5lbCA9IGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtY2hhbm5lbCcpIGFzIHN0cmluZztcclxuICAgICAgICBpZiAoIWNoYWxsZW5nZXNDaGFubmVsIHx8IGNoYWxsZW5nZXNDaGFubmVsLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgIHJldHVybiBpbnRlcmFjdGlvbi5yZXBseSh7Y29udGVudDogJ05vIGNoYWxsZW5nZXMgY2hhbm5lbCBzZXQuIFBsZWFzZSB1c2UgYHNldC1jaGFsbGVuZ2VzLWNoYW5uZWxgIGNvbW1hbmQgdG8gc2V0IGEgY2hhbm5lbCBmb3IgY2hhbGxlbmdlcyByZXZpZXdzLicsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGFubmVsUGFyc2VkID0gSlNPTi5wYXJzZShjaGFsbGVuZ2VzQ2hhbm5lbCk7XHJcbiAgICAgICAgaW50ZXJhY3Rpb24udXBkYXRlKHtjb250ZW50OiAnQ2hhbGxlbmdlIEFwcHJvdmVkJywgY29tcG9uZW50czogW119KTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRW1iZWRDb250ZW50ID0gaW50ZXJhY3Rpb24ubWVzc2FnZS5lbWJlZHNbMF07XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm1lbWJlci5ndWlsZC5jaGFubmVscy5jYWNoZS5nZXQoY2hhbm5lbFBhcnNlZC5pZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWwuc2VuZCh7ZW1iZWRzOiBbbWVzc2FnZUVtYmVkQ29udGVudF19KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoaW50ZXJhY3Rpb24uY3VzdG9tSWQgPT09ICdyZWplY3RDaGFsbGVuZ2UnKSB7XHJcbiAgICAgICAgaW50ZXJhY3Rpb24udXBkYXRlKHtjb250ZW50OiAnQ2hhbGxlbmdlIFJlamVjdGVkJywgY29tcG9uZW50czogW119KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW50ZXJhY3Rpb24ucmVwbHkoe2NvbnRlbnQ6ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byByZXZpZXcgY2hhbGxlbmdlcycsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY2hhbGxlbmdlUmV2aWV3QnV0dG9uQ29tcG9uZW50IiwidXNlckhhc1Blcm1pc3Npb24iLCJpbnRlcmFjdGlvbiIsImlzTW9kYWxTdWJtaXQiLCJyZXZpZXdzQ2hhbm5lbCIsImdldCIsInJlcGx5IiwiY29udGVudCIsImVwaGVtZXJhbCIsImJ0biIsImNoYW5uZWxQYXJzZWQiLCJKU09OIiwicGFyc2UiLCJmaWVsZHMiLCJjaGFubmVsIiwibWVtYmVyIiwiZ3VpbGQiLCJjaGFubmVscyIsImNhY2hlIiwiaWQiLCJjaGFsbGVuZ2UiLCJ2YWx1ZSIsImVtYmVkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwidGltZXN0YW1wIiwiRGF0ZSIsImZvb3RlciIsInRleHQiLCJ1c2VyIiwidXNlcm5hbWUiLCJzZW5kIiwiZW1iZWRzIiwiY29tcG9uZW50cyIsImlzQnV0dG9uIiwidXNlcklkIiwibWVtYmVycyIsImZldGNoIiwiaGFzUGVybWlzc2lvbiIsIm93bmVySWQiLCJjdXN0b21JZCIsImNoYWxsZW5nZXNDaGFubmVsIiwibGVuZ3RoIiwidXBkYXRlIiwibWVzc2FnZUVtYmVkQ29udGVudCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSxvQkFBb0I7QUFDOUMsU0FBU0MsOEJBQThCLEVBQUVDLGlCQUFpQixRQUFRLG9CQUFvQjtBQUV0RixlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSUEsWUFBWUMsYUFBYSxJQUFJO1FBQzdCLE1BQU1DLGlCQUF5QixNQUFNTCxVQUFVTSxHQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDRCxnQkFBZ0I7WUFDbkIsT0FBT0YsWUFBWUksS0FBSyxDQUFDO2dCQUFDQyxTQUFTO2dCQUFzSEMsV0FBVztZQUFJO1FBQzFLO1FBQ0EsTUFBTUMsTUFBTVQ7UUFDWixNQUFNVSxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQ1I7UUFDakMsTUFBTVMsU0FBU1gsWUFBWVcsTUFBTSxDQUFDQSxNQUFNO1FBQ3hDLE1BQU1DLFVBQVVaLFlBQVlhLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQ2IsR0FBRyxDQUFDSyxjQUFjUyxFQUFFO1FBQzVFLE1BQU1DLFlBQVlQLE9BQU9SLEdBQUcsQ0FBQyxhQUFhZ0IsS0FBSztRQUMvQyxNQUFNQyxRQUFRO1lBQ1pDLE9BQU87WUFDUEMsYUFBYUo7WUFDYkssT0FBTztZQUNQQyxXQUFXLElBQUlDO1lBQ2ZDLFFBQVE7Z0JBQ05DLE1BQU0sQ0FBQyxhQUFhLEVBQUUzQixZQUFZYSxNQUFNLENBQUNlLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFDMUQ7UUFDRjtRQUNBakIsUUFBUWtCLElBQUksQ0FBQztZQUFDQyxRQUFRO2dCQUFDWDthQUFNO1lBQUVZLFlBQVk7Z0JBQUN6QjthQUFJO1FBQUE7UUFDaERQLFlBQVlJLEtBQUssQ0FBQztZQUFDQyxTQUFTO1lBQWtDQyxXQUFXO1FBQUk7SUFDakY7SUFFQSxJQUFJTixZQUFZaUMsUUFBUSxJQUFJO1FBQzFCLE1BQU1DLFNBQVNsQyxZQUFZYSxNQUFNLENBQUNlLElBQUksQ0FBQ1gsRUFBRTtRQUN6QyxNQUFNVyxPQUFPLE1BQU01QixZQUFZYyxLQUFLLENBQUNxQixPQUFPLENBQUNDLEtBQUssQ0FBQ0Y7UUFDbkQsTUFBTUcsZ0JBQWdCLE1BQU10QyxrQkFBa0I2QixNQUFNNUIsWUFBWWEsTUFBTSxDQUFDQyxLQUFLLENBQUN3QixPQUFPO1FBRXBGLElBQUlELGVBQWU7WUFDakIsSUFBSXJDLFlBQVl1QyxRQUFRLEtBQUssb0JBQW9CO2dCQUMvQyxNQUFNQyxvQkFBb0IsTUFBTTNDLFVBQVVNLEdBQUcsQ0FBQztnQkFDOUMsSUFBSSxDQUFDcUMscUJBQXFCQSxrQkFBa0JDLE1BQU0sR0FBRyxHQUFHO29CQUN0RCxPQUFPekMsWUFBWUksS0FBSyxDQUFDO3dCQUFDQyxTQUFTO3dCQUFtSEMsV0FBVztvQkFBSTtnQkFDdks7Z0JBQ0EsTUFBTUUsZ0JBQWdCQyxLQUFLQyxLQUFLLENBQUM4QjtnQkFDakN4QyxZQUFZMEMsTUFBTSxDQUFDO29CQUFDckMsU0FBUztvQkFBc0IyQixZQUFZLEVBQUU7Z0JBQUE7Z0JBQ2pFLE1BQU1XLHNCQUFzQjNDLFlBQVk0QyxPQUFPLENBQUNiLE1BQU0sQ0FBQyxFQUFFO2dCQUN6RCxNQUFNbkIsVUFBVVosWUFBWWEsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDYixHQUFHLENBQUNLLGNBQWNTLEVBQUU7Z0JBQzVFLE9BQU9MLFFBQVFrQixJQUFJLENBQUM7b0JBQUNDLFFBQVE7d0JBQUNZO3FCQUFvQjtnQkFBQTtZQUNwRDtZQUVBLElBQUkzQyxZQUFZdUMsUUFBUSxLQUFLLG1CQUFtQjtnQkFDOUN2QyxZQUFZMEMsTUFBTSxDQUFDO29CQUFDckMsU0FBUztvQkFBc0IyQixZQUFZLEVBQUU7Z0JBQUE7WUFDbkU7UUFDRixPQUFPO1lBQ0xoQyxZQUFZSSxLQUFLLENBQUM7Z0JBQUNDLFNBQVM7Z0JBQW1EQyxXQUFXO1lBQUk7UUFDaEc7SUFDRjtBQUNGLENBQUEsRUFBQyJ9