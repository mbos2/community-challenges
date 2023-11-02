import { Flashcore } from "@roboplay/robo.js";
import { isAdmin } from "../utils/utils.js";
import { ROLES } from "../common/globals.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = [];
        const guildRoles = interaction.member.guild.roles.cache;
        const ownerId = interaction.member.guild.ownerId;
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
        ROLES.roles = roles;
        roles.push({
            ownerId: ownerId
        });
        await Flashcore.set('challenges-admin-roles', JSON.stringify(roles));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXHJlc2V0LWNoYWxsZW5nZS1yb2xlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgSUd1aWxkUm9sZVNob3J0LCBJT3duZXIgfSBmcm9tICcuLi9jb21tb24vdHlwZXMuanMnO1xyXG5pbXBvcnQgeyBpc0FkbWluIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQgeyBST0xFUyB9IGZyb20gJy4uL2NvbW1vbi9nbG9iYWxzLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdSZXNldCBjaGFsbGVuZ2Ugcm9sZXMgdG8gYWRtaW5pc3RyYXRvcnMuJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm9sZXM6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgZ3VpbGRSb2xlcyA9IGludGVyYWN0aW9uLm1lbWJlci5ndWlsZC5yb2xlcy5jYWNoZTtcclxuICAgIGNvbnN0IG93bmVySWQgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQub3duZXJJZDtcclxuXHJcbiAgICBpZiAoZ3VpbGRSb2xlcykge1xyXG4gICAgICBndWlsZFJvbGVzLmZvckVhY2goKHJvbGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FkbWluKHJvbGUucGVybWlzc2lvbnMuYml0ZmllbGQpKSB7XHJcbiAgICAgICAgICByb2xlcy5wdXNoKHtcclxuICAgICAgICAgICAgdmFsdWU6IHJvbGUuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcclxuICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJPTEVTLnJvbGVzID0gcm9sZXM7XHJcblxyXG4gICAgcm9sZXMucHVzaCh7XHJcbiAgICAgIG93bmVySWQ6IG93bmVySWQsXHJcbiAgICB9KVxyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycsIEpTT04uc3RyaW5naWZ5KHJvbGVzKSk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2Ugcm9sZXMgcmVzZXQgc3VjY2Vzc2Z1bGx5YCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgcmVzZXRpbmcgY2hhbGxlbmdlIHJvbGVzIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiaXNBZG1pbiIsIlJPTEVTIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJpbnRlcmFjdGlvbiIsInJvbGVzIiwiZ3VpbGRSb2xlcyIsIm1lbWJlciIsImd1aWxkIiwiY2FjaGUiLCJvd25lcklkIiwiZm9yRWFjaCIsInJvbGUiLCJwZXJtaXNzaW9ucyIsImJpdGZpZWxkIiwicHVzaCIsInZhbHVlIiwiaWQiLCJuYW1lIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFFbEUsU0FBU0MsT0FBTyxRQUFRLG9CQUFvQjtBQUM1QyxTQUFTQyxLQUFLLFFBQVEsdUJBQXVCO0FBRTdDLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7QUFDZixFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFhLEVBQUU7UUFDckIsTUFBTUMsYUFBYUYsWUFBWUcsTUFBTSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ksS0FBSztRQUN2RCxNQUFNQyxVQUFVTixZQUFZRyxNQUFNLENBQUNDLEtBQUssQ0FBQ0UsT0FBTztRQUVoRCxJQUFJSixZQUFZO1lBQ2RBLFdBQVdLLE9BQU8sQ0FBQyxDQUFDQztnQkFDbEIsSUFBSVosUUFBUVksS0FBS0MsV0FBVyxDQUFDQyxRQUFRLEdBQUc7b0JBQ3RDVCxNQUFNVSxJQUFJLENBQUM7d0JBQ1RDLE9BQU9KLEtBQUtLLEVBQUU7d0JBQ2RDLE1BQU1OLEtBQUtNLElBQUk7b0JBQ2pCO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBakIsTUFBTUksS0FBSyxHQUFHQTtRQUVkQSxNQUFNVSxJQUFJLENBQUM7WUFDVEwsU0FBU0E7UUFDWDtRQUNBLE1BQU1YLFVBQVVvQixHQUFHLENBQUMsMEJBQTBCQyxLQUFLQyxTQUFTLENBQUNoQjtRQUM3RCxPQUFPO1lBQUNpQixTQUFTLENBQUMsa0NBQWtDLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQ3hFLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU87WUFBQ0YsU0FBUyxDQUFDLG9DQUFvQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMxRTtBQUNGLENBQUEsRUFBQyJ9