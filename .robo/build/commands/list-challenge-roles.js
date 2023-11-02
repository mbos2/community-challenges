import { Flashcore } from "@roboplay/robo.js";
import { EmbedBuilder } from "discord.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = await Flashcore.get('challenges-admin-roles');
        const parsed = JSON.parse(roles);
        const exampleEmbed = new EmbedBuilder().setColor(0x0099FF).setTitle('Challenge Admin Roles').setTimestamp();
        parsed && parsed.forEach((role)=>{
            console.log(role);
            if (typeof role === 'object' && 'name' in role && 'value' in role) {
                exampleEmbed.addFields({
                    name: role.name,
                    value: `<@${role.value}>`
                });
            }
            if (typeof role === 'object' && 'ownerId' in role) {
                exampleEmbed.addFields({
                    name: 'Server Owner (Locked)',
                    value: `<@${role.ownerId}>`
                });
            }
        });
        return {
            embeds: [
                exampleEmbed
            ],
            ephemeral: true
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error listing challenge roles . . .`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXGxpc3QtY2hhbGxlbmdlLXJvbGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBJR3VpbGRSb2xlU2hvcnQgfSBmcm9tICcuLi9jb21tb24vdHlwZXMuanMnO1xyXG5pbXBvcnQgeyBFbWJlZEJ1aWxkZXIgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdSZXNldCBjaGFsbGVuZ2Ugcm9sZXMgdG8gYWRtaW5pc3RyYXRvcnMuJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJykgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyb2xlcyk7XHJcblxyXG4gICAgY29uc3QgZXhhbXBsZUVtYmVkID0gbmV3IEVtYmVkQnVpbGRlcigpXHJcbiAgICAuc2V0Q29sb3IoMHgwMDk5RkYpXHJcbiAgICAuc2V0VGl0bGUoJ0NoYWxsZW5nZSBBZG1pbiBSb2xlcycpXHJcbiAgICAuc2V0VGltZXN0YW1wKCk7XHJcbiAgICBwYXJzZWQgJiYgcGFyc2VkLmZvckVhY2goKHJvbGU6IElHdWlsZFJvbGVTaG9ydCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb2xlKVxyXG4gICAgICBpZiAodHlwZW9mIHJvbGUgPT09ICdvYmplY3QnICYmICduYW1lJyBpbiByb2xlICYmICd2YWx1ZScgaW4gcm9sZSkge1xyXG4gICAgICAgIGV4YW1wbGVFbWJlZC5hZGRGaWVsZHMoe1xyXG4gICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IGA8QCR7cm9sZS52YWx1ZX0+YCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiByb2xlID09PSAnb2JqZWN0JyAmJiAnb3duZXJJZCcgaW4gcm9sZSkge1xyXG4gICAgICAgIGV4YW1wbGVFbWJlZC5hZGRGaWVsZHMoe1xyXG4gICAgICAgICAgbmFtZTogJ1NlcnZlciBPd25lciAoTG9ja2VkKScsXHJcbiAgICAgICAgICB2YWx1ZTogYDxAJHtyb2xlLm93bmVySWR9PmAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7ZW1iZWRzOiBbZXhhbXBsZUVtYmVkXSwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciBsaXN0aW5nIGNoYWxsZW5nZSByb2xlcyAuIC4gLmAsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiRW1iZWRCdWlsZGVyIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJpbnRlcmFjdGlvbiIsInJvbGVzIiwiZ2V0IiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiZXhhbXBsZUVtYmVkIiwic2V0Q29sb3IiLCJzZXRUaXRsZSIsInNldFRpbWVzdGFtcCIsImZvckVhY2giLCJyb2xlIiwiY29uc29sZSIsImxvZyIsImFkZEZpZWxkcyIsIm5hbWUiLCJ2YWx1ZSIsIm93bmVySWQiLCJlbWJlZHMiLCJlcGhlbWVyYWwiLCJlcnJvciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLFNBQVNDLFlBQVksUUFBUSxhQUFhO0FBRTFDLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7QUFDZixFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1MLFVBQVVNLEdBQUcsQ0FBQztRQUNsQyxNQUFNQyxTQUFTQyxLQUFLQyxLQUFLLENBQUNKO1FBRTFCLE1BQU1LLGVBQWUsSUFBSVQsZUFDeEJVLFFBQVEsQ0FBQyxVQUNUQyxRQUFRLENBQUMseUJBQ1RDLFlBQVk7UUFDYk4sVUFBVUEsT0FBT08sT0FBTyxDQUFDLENBQUNDO1lBQ3hCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osSUFBSSxPQUFPQSxTQUFTLFlBQVksVUFBVUEsUUFBUSxXQUFXQSxNQUFNO2dCQUNqRUwsYUFBYVEsU0FBUyxDQUFDO29CQUNyQkMsTUFBTUosS0FBS0ksSUFBSTtvQkFDZkMsT0FBTyxDQUFDLEVBQUUsRUFBRUwsS0FBS0ssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0I7WUFDRjtZQUVBLElBQUksT0FBT0wsU0FBUyxZQUFZLGFBQWFBLE1BQU07Z0JBQ2pETCxhQUFhUSxTQUFTLENBQUM7b0JBQ3JCQyxNQUFNO29CQUNOQyxPQUFPLENBQUMsRUFBRSxFQUFFTCxLQUFLTSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM3QjtZQUNGO1FBQ0Y7UUFFQSxPQUFPO1lBQUNDLFFBQVE7Z0JBQUNaO2FBQWE7WUFBRWEsV0FBVztRQUFJO0lBQ2pELEVBQUUsT0FBT0MsT0FBTztRQUNkUixRQUFRQyxHQUFHLENBQUNPO1FBQ1osT0FBTztZQUFDQyxTQUFTLENBQUMsbUNBQW1DLENBQUM7WUFBRUYsV0FBVztRQUFJO0lBQ3pFO0FBQ0YsQ0FBQSxFQUFDIn0=