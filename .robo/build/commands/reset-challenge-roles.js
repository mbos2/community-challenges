import { Flashcore } from "@roboplay/robo.js";
import { isAdmin } from "../utils/utils.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = [];
        const member = interaction.member;
        const guildRoles = member.guild.roles.cache;
        const ownerId = member.guild.ownerId;
        if (guildRoles) {
            guildRoles.forEach((role)=>{
                if (isAdmin(role.permissions.bitfield)) {
                    roles.push({
                        value: role.id,
                        name: role.name
                    });
                }
            });
        }
        roles.push({
            ownerId: ownerId
        });
        await Flashcore.set('challenges-admin-roles', JSON.stringify(roles), {
            namespace: interaction.guildId
        });
        return {
            content: `Challenge roles reset successfully`,
            ephemeral: true
        };
    } catch (error) {
        return {
            content: `Error reseting challenge roles . . .`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZXNldC1jaGFsbGVuZ2Utcm9sZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IElHdWlsZFJvbGVTaG9ydCwgSU93bmVyIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzLmpzJztcclxuaW1wb3J0IHsgaXNBZG1pbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuaW1wb3J0IHsgQ2hhdElucHV0Q29tbWFuZEludGVyYWN0aW9uLCBHdWlsZE1lbWJlciB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1Jlc2V0IGNoYWxsZW5nZSByb2xlcyB0byBhZG1pbmlzdHJhdG9ycy4nLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByb2xlczogKElHdWlsZFJvbGVTaG9ydCB8IElPd25lcilbXSA9IFtdO1xyXG4gICAgY29uc3QgbWVtYmVyID0gaW50ZXJhY3Rpb24ubWVtYmVyIGFzIEd1aWxkTWVtYmVyO1xyXG4gICAgY29uc3QgZ3VpbGRSb2xlcyA9IG1lbWJlci5ndWlsZC5yb2xlcy5jYWNoZTtcclxuICAgIGNvbnN0IG93bmVySWQgPSBtZW1iZXIuZ3VpbGQub3duZXJJZDtcclxuXHJcbiAgICBpZiAoZ3VpbGRSb2xlcykge1xyXG4gICAgICBndWlsZFJvbGVzLmZvckVhY2goKHJvbGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FkbWluKHJvbGUucGVybWlzc2lvbnMuYml0ZmllbGQpKSB7XHJcbiAgICAgICAgICByb2xlcy5wdXNoKHtcclxuICAgICAgICAgICAgdmFsdWU6IHJvbGUuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcclxuICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJvbGVzLnB1c2goe1xyXG4gICAgICBvd25lcklkOiBvd25lcklkLFxyXG4gICAgfSlcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnLCBKU09OLnN0cmluZ2lmeShyb2xlcyksIHtcclxuICAgICAgbmFtZXNwYWNlOiBpbnRlcmFjdGlvbi5ndWlsZElkIVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2Ugcm9sZXMgcmVzZXQgc3VjY2Vzc2Z1bGx5YCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgcmVzZXRpbmcgY2hhbGxlbmdlIHJvbGVzIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiaXNBZG1pbiIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaW50ZXJhY3Rpb24iLCJyb2xlcyIsIm1lbWJlciIsImd1aWxkUm9sZXMiLCJndWlsZCIsImNhY2hlIiwib3duZXJJZCIsImZvckVhY2giLCJyb2xlIiwicGVybWlzc2lvbnMiLCJiaXRmaWVsZCIsInB1c2giLCJ2YWx1ZSIsImlkIiwibmFtZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lc3BhY2UiLCJndWlsZElkIiwiY29udGVudCIsImVwaGVtZXJhbCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUVsRSxTQUFTQyxPQUFPLFFBQVEsb0JBQW9CO0FBRzVDLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7QUFDZixFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFzQyxFQUFFO1FBQzlDLE1BQU1DLFNBQVNGLFlBQVlFLE1BQU07UUFDakMsTUFBTUMsYUFBYUQsT0FBT0UsS0FBSyxDQUFDSCxLQUFLLENBQUNJLEtBQUs7UUFDM0MsTUFBTUMsVUFBVUosT0FBT0UsS0FBSyxDQUFDRSxPQUFPO1FBRXBDLElBQUlILFlBQVk7WUFDZEEsV0FBV0ksT0FBTyxDQUFDLENBQUNDO2dCQUNsQixJQUFJWCxRQUFRVyxLQUFLQyxXQUFXLENBQUNDLFFBQVEsR0FBRztvQkFDdENULE1BQU1VLElBQUksQ0FBQzt3QkFDVEMsT0FBT0osS0FBS0ssRUFBRTt3QkFDZEMsTUFBTU4sS0FBS00sSUFBSTtvQkFDakI7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUFiLE1BQU1VLElBQUksQ0FBQztZQUNUTCxTQUFTQTtRQUNYO1FBQ0EsTUFBTVYsVUFBVW1CLEdBQUcsQ0FBQywwQkFBMEJDLEtBQUtDLFNBQVMsQ0FBQ2hCLFFBQVE7WUFDbkVpQixXQUFXbEIsWUFBWW1CLE9BQU87UUFDaEM7UUFDQSxPQUFPO1lBQUNDLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDeEUsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTztZQUFDRixTQUFTLENBQUMsb0NBQW9DLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQzFFO0FBQ0YsQ0FBQSxFQUFDIn0=