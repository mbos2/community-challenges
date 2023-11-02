import { Flashcore } from "@roboplay/robo.js";
import { isAdmin } from "../utils/utils.js";
export default (async (interaction)=>{
    try {
        console.log('Checking if challenge roles are set . . . ');
        const r = await Flashcore.get('challenges-admin-roles');
        const roles = r ? JSON.parse(r) : [];
        if (roles.length > 0) {
            console.log('Challenge roles already set. Skipping . . .');
            return;
        }
        console.log('Challenge roles not set. Setting . . .');
        const tempRoles = [];
        const guildRoles = interaction.member.guild.roles.cache;
        const ownerId = interaction.member.guild.ownerId;
        if (guildRoles) {
            guildRoles.forEach((role)=>{
                if (isAdmin(role.permissions.bitfield)) {
                    tempRoles.push({
                        value: role.id,
                        name: role.name
                    });
                }
            });
        }
        tempRoles.push({
            ownerId: ownerId
        });
        await Flashcore.set('challenges-admin-roles', JSON.stringify(tempRoles));
        console.log('Challenge roles reset successfully');
    } catch (error) {
        console.log(error);
        return {
            content: `Error reseting challenge roles . . .`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGV2ZW50c1xccmVhZHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBjaGFsbGVuZ2VSZXZpZXdCdXR0b25Db21wb25lbnQsIGlzQWRtaW4sIHVzZXJIYXNQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ0NoZWNraW5nIGlmIGNoYWxsZW5nZSByb2xlcyBhcmUgc2V0IC4gLiAuICcpXHJcbiAgICBjb25zdCByID0gYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHJvbGVzID0gciA/IEpTT04ucGFyc2UocikgOiBbXTtcclxuICAgIGlmIChyb2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDaGFsbGVuZ2Ugcm9sZXMgYWxyZWFkeSBzZXQuIFNraXBwaW5nIC4gLiAuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdDaGFsbGVuZ2Ugcm9sZXMgbm90IHNldC4gU2V0dGluZyAuIC4gLicpO1xyXG4gICAgY29uc3QgdGVtcFJvbGVzOiBhbnkgPSBbXTtcclxuICAgIGNvbnN0IGd1aWxkUm9sZXMgPSBpbnRlcmFjdGlvbi5tZW1iZXIuZ3VpbGQucm9sZXMuY2FjaGU7XHJcbiAgICBjb25zdCBvd25lcklkID0gaW50ZXJhY3Rpb24ubWVtYmVyLmd1aWxkLm93bmVySWQ7XHJcblxyXG4gICAgaWYgKGd1aWxkUm9sZXMpIHtcclxuICAgICAgZ3VpbGRSb2xlcy5mb3JFYWNoKChyb2xlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoaXNBZG1pbihyb2xlLnBlcm1pc3Npb25zLmJpdGZpZWxkKSkge1xyXG4gICAgICAgICAgdGVtcFJvbGVzLnB1c2goe1xyXG4gICAgICAgICAgICB2YWx1ZTogcm9sZS5pZCxcclxuICAgICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcFJvbGVzLnB1c2goe1xyXG4gICAgICBvd25lcklkOiBvd25lcklkLFxyXG4gICAgfSlcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnLCBKU09OLnN0cmluZ2lmeSh0ZW1wUm9sZXMpKTtcclxuICAgIGNvbnNvbGUubG9nKCdDaGFsbGVuZ2Ugcm9sZXMgcmVzZXQgc3VjY2Vzc2Z1bGx5JylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciByZXNldGluZyBjaGFsbGVuZ2Ugcm9sZXMgLiAuIC5gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJpc0FkbWluIiwiaW50ZXJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiciIsImdldCIsInJvbGVzIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwidGVtcFJvbGVzIiwiZ3VpbGRSb2xlcyIsIm1lbWJlciIsImd1aWxkIiwiY2FjaGUiLCJvd25lcklkIiwiZm9yRWFjaCIsInJvbGUiLCJwZXJtaXNzaW9ucyIsImJpdGZpZWxkIiwicHVzaCIsInZhbHVlIiwiaWQiLCJuYW1lIiwic2V0Iiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb250ZW50IiwiZXBoZW1lcmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQVEsb0JBQW9CO0FBQzlDLFNBQXlDQyxPQUFPLFFBQTJCLG9CQUFvQjtBQUUvRixlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSTtRQUNGQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxJQUFJLE1BQU1MLFVBQVVNLEdBQUcsQ0FBQztRQUM5QixNQUFNQyxRQUFRRixJQUFJRyxLQUFLQyxLQUFLLENBQUNKLEtBQUssRUFBRTtRQUNwQyxJQUFJRSxNQUFNRyxNQUFNLEdBQUcsR0FBRztZQUNwQlAsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRjtRQUNBRCxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNTyxZQUFpQixFQUFFO1FBQ3pCLE1BQU1DLGFBQWFWLFlBQVlXLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDUCxLQUFLLENBQUNRLEtBQUs7UUFDdkQsTUFBTUMsVUFBVWQsWUFBWVcsTUFBTSxDQUFDQyxLQUFLLENBQUNFLE9BQU87UUFFaEQsSUFBSUosWUFBWTtZQUNkQSxXQUFXSyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2xCLElBQUlqQixRQUFRaUIsS0FBS0MsV0FBVyxDQUFDQyxRQUFRLEdBQUc7b0JBQ3RDVCxVQUFVVSxJQUFJLENBQUM7d0JBQ2JDLE9BQU9KLEtBQUtLLEVBQUU7d0JBQ2RDLE1BQU1OLEtBQUtNLElBQUk7b0JBQ2pCO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBYixVQUFVVSxJQUFJLENBQUM7WUFDYkwsU0FBU0E7UUFDWDtRQUNBLE1BQU1oQixVQUFVeUIsR0FBRyxDQUFDLDBCQUEwQmpCLEtBQUtrQixTQUFTLENBQUNmO1FBQzdEUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU91QixPQUFPO1FBQ2R4QixRQUFRQyxHQUFHLENBQUN1QjtRQUNaLE9BQU87WUFBQ0MsU0FBUyxDQUFDLG9DQUFvQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMxRTtBQUNGLENBQUEsRUFBQyJ9