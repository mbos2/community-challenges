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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZXNldC1jaGFsbGVuZ2Utcm9sZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IElHdWlsZFJvbGVTaG9ydCwgSU93bmVyIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzLmpzJztcclxuaW1wb3J0IHsgaXNBZG1pbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuaW1wb3J0IHsgUk9MRVMgfSBmcm9tICcuLi9jb21tb24vZ2xvYmFscy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnUmVzZXQgY2hhbGxlbmdlIHJvbGVzIHRvIGFkbWluaXN0cmF0b3JzLicsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvbGVzOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IGd1aWxkUm9sZXMgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQucm9sZXMuY2FjaGU7XHJcbiAgICBjb25zdCBvd25lcklkID0gaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLm93bmVySWQ7XHJcblxyXG4gICAgaWYgKGd1aWxkUm9sZXMpIHtcclxuICAgICAgZ3VpbGRSb2xlcy5mb3JFYWNoKChyb2xlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoaXNBZG1pbihyb2xlLnBlcm1pc3Npb25zLmJpdGZpZWxkKSkge1xyXG4gICAgICAgICAgcm9sZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiByb2xlLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByb2xlLm5hbWUsXHJcbiAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBST0xFUy5yb2xlcyA9IHJvbGVzO1xyXG5cclxuICAgIHJvbGVzLnB1c2goe1xyXG4gICAgICBvd25lcklkOiBvd25lcklkLFxyXG4gICAgfSlcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnLCBKU09OLnN0cmluZ2lmeShyb2xlcykpO1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlIHJvbGVzIHJlc2V0IHN1Y2Nlc3NmdWxseWAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIHJlc2V0aW5nIGNoYWxsZW5nZSByb2xlcyAuIC4gLmAsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImlzQWRtaW4iLCJST0xFUyIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaW50ZXJhY3Rpb24iLCJyb2xlcyIsImd1aWxkUm9sZXMiLCJtZW1iZXIiLCJndWlsZCIsImNhY2hlIiwib3duZXJJZCIsImZvckVhY2giLCJyb2xlIiwicGVybWlzc2lvbnMiLCJiaXRmaWVsZCIsInB1c2giLCJ2YWx1ZSIsImlkIiwibmFtZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLFNBQVNDLE9BQU8sUUFBUSxvQkFBb0I7QUFDNUMsU0FBU0MsS0FBSyxRQUFRLHVCQUF1QjtBQUU3QyxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0FBQ2YsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsUUFBYSxFQUFFO1FBQ3JCLE1BQU1DLGFBQWFGLFlBQVlHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLLENBQUNJLEtBQUs7UUFDdkQsTUFBTUMsVUFBVU4sWUFBWUcsTUFBTSxDQUFDQyxLQUFLLENBQUNFLE9BQU87UUFFaEQsSUFBSUosWUFBWTtZQUNkQSxXQUFXSyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2xCLElBQUlaLFFBQVFZLEtBQUtDLFdBQVcsQ0FBQ0MsUUFBUSxHQUFHO29CQUN0Q1QsTUFBTVUsSUFBSSxDQUFDO3dCQUNUQyxPQUFPSixLQUFLSyxFQUFFO3dCQUNkQyxNQUFNTixLQUFLTSxJQUFJO29CQUNqQjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQWpCLE1BQU1JLEtBQUssR0FBR0E7UUFFZEEsTUFBTVUsSUFBSSxDQUFDO1lBQ1RMLFNBQVNBO1FBQ1g7UUFDQSxNQUFNWCxVQUFVb0IsR0FBRyxDQUFDLDBCQUEwQkMsS0FBS0MsU0FBUyxDQUFDaEI7UUFDN0QsT0FBTztZQUFDaUIsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN4RSxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPO1lBQUNGLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDMUU7QUFDRixDQUFBLEVBQUMifQ==