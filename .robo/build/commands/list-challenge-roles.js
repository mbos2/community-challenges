import { Flashcore } from "@roboplay/robo.js";
import { EmbedBuilder } from "discord.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = await Flashcore.get('challenges-admin-roles', {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxsaXN0LWNoYWxsZW5nZS1yb2xlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgSUd1aWxkUm9sZVNob3J0IH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzLmpzJztcclxuaW1wb3J0IHsgQ2hhdElucHV0Q29tbWFuZEludGVyYWN0aW9uLCBFbWJlZEJ1aWxkZXIgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdSZXNldCBjaGFsbGVuZ2Ugcm9sZXMgdG8gYWRtaW5pc3RyYXRvcnMuJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywge1xyXG4gICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICB9KSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJvbGVzKTtcclxuXHJcbiAgICBjb25zdCBleGFtcGxlRW1iZWQgPSBuZXcgRW1iZWRCdWlsZGVyKClcclxuICAgIC5zZXRDb2xvcigweDAwOTlGRilcclxuICAgIC5zZXRUaXRsZSgnQ2hhbGxlbmdlIEFkbWluIFJvbGVzJylcclxuICAgIC5zZXRUaW1lc3RhbXAoKTtcclxuICAgIHBhcnNlZCAmJiBwYXJzZWQuZm9yRWFjaCgocm9sZTogSUd1aWxkUm9sZVNob3J0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvbGUpXHJcbiAgICAgIGlmICh0eXBlb2Ygcm9sZSA9PT0gJ29iamVjdCcgJiYgJ25hbWUnIGluIHJvbGUgJiYgJ3ZhbHVlJyBpbiByb2xlKSB7XHJcbiAgICAgICAgZXhhbXBsZUVtYmVkLmFkZEZpZWxkcyh7XHJcbiAgICAgICAgICBuYW1lOiByb2xlLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogYDxAJHtyb2xlLnZhbHVlfT5gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJvbGUgPT09ICdvYmplY3QnICYmICdvd25lcklkJyBpbiByb2xlKSB7XHJcbiAgICAgICAgZXhhbXBsZUVtYmVkLmFkZEZpZWxkcyh7XHJcbiAgICAgICAgICBuYW1lOiAnU2VydmVyIE93bmVyIChMb2NrZWQpJyxcclxuICAgICAgICAgIHZhbHVlOiBgPEAke3JvbGUub3duZXJJZH0+YCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtlbWJlZHM6IFtleGFtcGxlRW1iZWRdLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIGxpc3RpbmcgY2hhbGxlbmdlIHJvbGVzIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJFbWJlZEJ1aWxkZXIiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsImludGVyYWN0aW9uIiwicm9sZXMiLCJnZXQiLCJuYW1lc3BhY2UiLCJndWlsZElkIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiZXhhbXBsZUVtYmVkIiwic2V0Q29sb3IiLCJzZXRUaXRsZSIsInNldFRpbWVzdGFtcCIsImZvckVhY2giLCJyb2xlIiwiY29uc29sZSIsImxvZyIsImFkZEZpZWxkcyIsIm5hbWUiLCJ2YWx1ZSIsIm93bmVySWQiLCJlbWJlZHMiLCJlcGhlbWVyYWwiLCJlcnJvciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLFNBQXNDQyxZQUFZLFFBQVEsYUFBYTtBQUV2RSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0FBQ2YsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsUUFBUSxNQUFNTCxVQUFVTSxHQUFHLENBQUMsMEJBQTBCO1lBQzFEQyxXQUFXSCxZQUFZSSxPQUFPO1FBQ2hDO1FBQ0EsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDTjtRQUUxQixNQUFNTyxlQUFlLElBQUlYLGVBQ3hCWSxRQUFRLENBQUMsVUFDVEMsUUFBUSxDQUFDLHlCQUNUQyxZQUFZO1FBQ2JOLFVBQVVBLE9BQU9PLE9BQU8sQ0FBQyxDQUFDQztZQUN4QkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaLElBQUksT0FBT0EsU0FBUyxZQUFZLFVBQVVBLFFBQVEsV0FBV0EsTUFBTTtnQkFDakVMLGFBQWFRLFNBQVMsQ0FBQztvQkFDckJDLE1BQU1KLEtBQUtJLElBQUk7b0JBQ2ZDLE9BQU8sQ0FBQyxFQUFFLEVBQUVMLEtBQUtLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFJLE9BQU9MLFNBQVMsWUFBWSxhQUFhQSxNQUFNO2dCQUNqREwsYUFBYVEsU0FBUyxDQUFDO29CQUNyQkMsTUFBTTtvQkFDTkMsT0FBTyxDQUFDLEVBQUUsRUFBRUwsS0FBS00sT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDN0I7WUFDRjtRQUNGO1FBRUEsT0FBTztZQUFDQyxRQUFRO2dCQUFDWjthQUFhO1lBQUVhLFdBQVc7UUFBSTtJQUNqRCxFQUFFLE9BQU9DLE9BQU87UUFDZFIsUUFBUUMsR0FBRyxDQUFDTztRQUNaLE9BQU87WUFBQ0MsU0FBUyxDQUFDLG1DQUFtQyxDQUFDO1lBQUVGLFdBQVc7UUFBSTtJQUN6RTtBQUNGLENBQUEsRUFBQyJ9