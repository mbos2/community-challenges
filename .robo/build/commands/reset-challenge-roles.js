import { Flashcore } from "@roboplay/robo.js";
import { isAdmin } from "../utils/utils.js";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZXNldC1jaGFsbGVuZ2Utcm9sZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IGlzQWRtaW4gfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnUmVzZXQgY2hhbGxlbmdlIHJvbGVzIHRvIGFkbWluaXN0cmF0b3JzLicsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvbGVzOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IGd1aWxkUm9sZXMgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQucm9sZXMuY2FjaGU7XHJcbiAgICBjb25zdCBvd25lcklkID0gaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLm93bmVySWQ7XHJcblxyXG4gICAgaWYgKGd1aWxkUm9sZXMpIHtcclxuICAgICAgZ3VpbGRSb2xlcy5mb3JFYWNoKChyb2xlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoaXNBZG1pbihyb2xlLnBlcm1pc3Npb25zLmJpdGZpZWxkKSkge1xyXG4gICAgICAgICAgcm9sZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiByb2xlLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByb2xlLm5hbWUsXHJcbiAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByb2xlcy5wdXNoKHtcclxuICAgICAgb3duZXJJZDogb3duZXJJZCxcclxuICAgIH0pXHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywgSlNPTi5zdHJpbmdpZnkocm9sZXMpKTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZSByb2xlcyByZXNldCBzdWNjZXNzZnVsbHlgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciByZXNldGluZyBjaGFsbGVuZ2Ugcm9sZXMgLiAuIC5gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJpc0FkbWluIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJpbnRlcmFjdGlvbiIsInJvbGVzIiwiZ3VpbGRSb2xlcyIsIm1lbWJlciIsImd1aWxkIiwiY2FjaGUiLCJvd25lcklkIiwiZm9yRWFjaCIsInJvbGUiLCJwZXJtaXNzaW9ucyIsImJpdGZpZWxkIiwicHVzaCIsInZhbHVlIiwiaWQiLCJuYW1lIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFDbEUsU0FBU0MsT0FBTyxRQUFRLG9CQUFvQjtBQUU1QyxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0FBQ2YsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsUUFBYSxFQUFFO1FBQ3JCLE1BQU1DLGFBQWFGLFlBQVlHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLLENBQUNJLEtBQUs7UUFDdkQsTUFBTUMsVUFBVU4sWUFBWUcsTUFBTSxDQUFDQyxLQUFLLENBQUNFLE9BQU87UUFFaEQsSUFBSUosWUFBWTtZQUNkQSxXQUFXSyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2xCLElBQUlYLFFBQVFXLEtBQUtDLFdBQVcsQ0FBQ0MsUUFBUSxHQUFHO29CQUN0Q1QsTUFBTVUsSUFBSSxDQUFDO3dCQUNUQyxPQUFPSixLQUFLSyxFQUFFO3dCQUNkQyxNQUFNTixLQUFLTSxJQUFJO29CQUNqQjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQWIsTUFBTVUsSUFBSSxDQUFDO1lBQ1RMLFNBQVNBO1FBQ1g7UUFDQSxNQUFNVixVQUFVbUIsR0FBRyxDQUFDLDBCQUEwQkMsS0FBS0MsU0FBUyxDQUFDaEI7UUFDN0QsT0FBTztZQUFDaUIsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN4RSxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPO1lBQUNGLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDMUU7QUFDRixDQUFBLEVBQUMifQ==