import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Add or remove challenge roles',
    options: [
        {
            name: 'role',
            description: 'Role',
            type: 'role',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    try {
        const role = interaction.options.getRole('role');
        const roleShort = {
            value: role.id,
            name: role.name
        };
        const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles'));
        existingRoles.push(roleShort);
        await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles));
        return {
            content: `Added challenge role `,
            ephemeral: true
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error adding challenge rolee . . .`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXGFkZC1jaGFsbGVuZ2Utcm9sZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgSUd1aWxkUm9sZVNob3J0IH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdBZGQgb3IgcmVtb3ZlIGNoYWxsZW5nZSByb2xlcycsXHJcbiAgb3B0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAncm9sZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnUm9sZScsXHJcbiAgICAgIHR5cGU6ICdyb2xlJyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm9sZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0Um9sZSgncm9sZScpO1xyXG4gICAgY29uc3Qgcm9sZVNob3J0OiBJR3VpbGRSb2xlU2hvcnQgPSB7XHJcbiAgICAgIHZhbHVlOiByb2xlLmlkLFxyXG4gICAgICBuYW1lOiByb2xlLm5hbWUsXHJcbiAgICB9ICAgXHJcbiAgICBjb25zdCBleGlzdGluZ1JvbGVzID0gSlNPTi5wYXJzZShhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJykpO1xyXG4gICAgZXhpc3RpbmdSb2xlcy5wdXNoKHJvbGVTaG9ydCk7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdSb2xlcykpO1xyXG5cclxuICAgIHJldHVybiB7Y29udGVudDogYEFkZGVkIGNoYWxsZW5nZSByb2xlIGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgYWRkaW5nIGNoYWxsZW5nZSByb2xlZSAuIC4gLmAsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsImludGVyYWN0aW9uIiwicm9sZSIsImdldFJvbGUiLCJyb2xlU2hvcnQiLCJ2YWx1ZSIsImlkIiwiZXhpc3RpbmdSb2xlcyIsIkpTT04iLCJwYXJzZSIsImdldCIsInB1c2giLCJzZXQiLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUdsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtBQUNILEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLE9BQU9ELFlBQVlKLE9BQU8sQ0FBQ00sT0FBTyxDQUFDO1FBQ3pDLE1BQU1DLFlBQTZCO1lBQ2pDQyxPQUFPSCxLQUFLSSxFQUFFO1lBQ2RSLE1BQU1JLEtBQUtKLElBQUk7UUFDakI7UUFDQSxNQUFNUyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxNQUFNZixVQUFVZ0IsR0FBRyxDQUFDO1FBQ3JESCxjQUFjSSxJQUFJLENBQUNQO1FBQ25CLE1BQU1WLFVBQVVrQixHQUFHLENBQUMsMEJBQTBCSixLQUFLSyxTQUFTLENBQUNOO1FBRTdELE9BQU87WUFBQ08sU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMzRCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU87WUFBQ0YsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN4RTtBQUNGLENBQUEsRUFBQyJ9