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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxsaXN0LWNoYWxsZW5nZS1yb2xlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgSUd1aWxkUm9sZVNob3J0IH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzLmpzJztcclxuaW1wb3J0IHsgRW1iZWRCdWlsZGVyIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnUmVzZXQgY2hhbGxlbmdlIHJvbGVzIHRvIGFkbWluaXN0cmF0b3JzLicsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvbGVzID0gYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uocm9sZXMpO1xyXG5cclxuICAgIGNvbnN0IGV4YW1wbGVFbWJlZCA9IG5ldyBFbWJlZEJ1aWxkZXIoKVxyXG4gICAgLnNldENvbG9yKDB4MDA5OUZGKVxyXG4gICAgLnNldFRpdGxlKCdDaGFsbGVuZ2UgQWRtaW4gUm9sZXMnKVxyXG4gICAgLnNldFRpbWVzdGFtcCgpO1xyXG4gICAgcGFyc2VkICYmIHBhcnNlZC5mb3JFYWNoKChyb2xlOiBJR3VpbGRSb2xlU2hvcnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocm9sZSlcclxuICAgICAgaWYgKHR5cGVvZiByb2xlID09PSAnb2JqZWN0JyAmJiAnbmFtZScgaW4gcm9sZSAmJiAndmFsdWUnIGluIHJvbGUpIHtcclxuICAgICAgICBleGFtcGxlRW1iZWQuYWRkRmllbGRzKHtcclxuICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiBgPEAke3JvbGUudmFsdWV9PmAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygcm9sZSA9PT0gJ29iamVjdCcgJiYgJ293bmVySWQnIGluIHJvbGUpIHtcclxuICAgICAgICBleGFtcGxlRW1iZWQuYWRkRmllbGRzKHtcclxuICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgT3duZXIgKExvY2tlZCknLFxyXG4gICAgICAgICAgdmFsdWU6IGA8QCR7cm9sZS5vd25lcklkfT5gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge2VtYmVkczogW2V4YW1wbGVFbWJlZF0sIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgbGlzdGluZyBjaGFsbGVuZ2Ugcm9sZXMgLiAuIC5gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsIkVtYmVkQnVpbGRlciIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaW50ZXJhY3Rpb24iLCJyb2xlcyIsImdldCIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImV4YW1wbGVFbWJlZCIsInNldENvbG9yIiwic2V0VGl0bGUiLCJzZXRUaW1lc3RhbXAiLCJmb3JFYWNoIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRGaWVsZHMiLCJuYW1lIiwidmFsdWUiLCJvd25lcklkIiwiZW1iZWRzIiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUVsRSxTQUFTQyxZQUFZLFFBQVEsYUFBYTtBQUUxQyxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0FBQ2YsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsUUFBUSxNQUFNTCxVQUFVTSxHQUFHLENBQUM7UUFDbEMsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDSjtRQUUxQixNQUFNSyxlQUFlLElBQUlULGVBQ3hCVSxRQUFRLENBQUMsVUFDVEMsUUFBUSxDQUFDLHlCQUNUQyxZQUFZO1FBQ2JOLFVBQVVBLE9BQU9PLE9BQU8sQ0FBQyxDQUFDQztZQUN4QkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaLElBQUksT0FBT0EsU0FBUyxZQUFZLFVBQVVBLFFBQVEsV0FBV0EsTUFBTTtnQkFDakVMLGFBQWFRLFNBQVMsQ0FBQztvQkFDckJDLE1BQU1KLEtBQUtJLElBQUk7b0JBQ2ZDLE9BQU8sQ0FBQyxFQUFFLEVBQUVMLEtBQUtLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFJLE9BQU9MLFNBQVMsWUFBWSxhQUFhQSxNQUFNO2dCQUNqREwsYUFBYVEsU0FBUyxDQUFDO29CQUNyQkMsTUFBTTtvQkFDTkMsT0FBTyxDQUFDLEVBQUUsRUFBRUwsS0FBS00sT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDN0I7WUFDRjtRQUNGO1FBRUEsT0FBTztZQUFDQyxRQUFRO2dCQUFDWjthQUFhO1lBQUVhLFdBQVc7UUFBSTtJQUNqRCxFQUFFLE9BQU9DLE9BQU87UUFDZFIsUUFBUUMsR0FBRyxDQUFDTztRQUNaLE9BQU87WUFBQ0MsU0FBUyxDQUFDLG1DQUFtQyxDQUFDO1lBQUVGLFdBQVc7UUFBSTtJQUN6RTtBQUNGLENBQUEsRUFBQyJ9