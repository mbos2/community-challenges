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
        const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles', {
            namespace: interaction.guildId
        }));
        existingRoles.push(roleShort);
        await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles), {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxhZGQtY2hhbGxlbmdlLXJvbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IElHdWlsZFJvbGVTaG9ydCB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy5qcyc7XHJcbmltcG9ydCB7IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ0FkZCBvciByZW1vdmUgY2hhbGxlbmdlIHJvbGVzJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyb2xlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdSb2xlJyxcclxuICAgICAgdHlwZTogJ3JvbGUnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByb2xlID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRSb2xlKCdyb2xlJyk7XHJcbiAgICBjb25zdCByb2xlU2hvcnQ6IElHdWlsZFJvbGVTaG9ydCA9IHtcclxuICAgICAgdmFsdWU6IHJvbGUhLmlkLFxyXG4gICAgICBuYW1lOiByb2xlIS5uYW1lLFxyXG4gICAgfSAgIFxyXG4gICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IEpTT04ucGFyc2UoYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycsIHtcclxuICAgICAgbmFtZXNwYWNlOiBpbnRlcmFjdGlvbi5ndWlsZElkIVxyXG4gICAgfSkpO1xyXG4gICAgZXhpc3RpbmdSb2xlcy5wdXNoKHJvbGVTaG9ydCk7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdSb2xlcyksIHtcclxuICAgICAgbmFtZXNwYWNlOiBpbnRlcmFjdGlvbi5ndWlsZElkIVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgQWRkZWQgY2hhbGxlbmdlIHJvbGUgYCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciBhZGRpbmcgY2hhbGxlbmdlIHJvbGVlIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJyb2xlIiwiZ2V0Um9sZSIsInJvbGVTaG9ydCIsInZhbHVlIiwiaWQiLCJleGlzdGluZ1JvbGVzIiwiSlNPTiIsInBhcnNlIiwiZ2V0IiwibmFtZXNwYWNlIiwiZ3VpbGRJZCIsInB1c2giLCJzZXQiLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUlsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtBQUNILEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLE9BQU9ELFlBQVlKLE9BQU8sQ0FBQ00sT0FBTyxDQUFDO1FBQ3pDLE1BQU1DLFlBQTZCO1lBQ2pDQyxPQUFPSCxLQUFNSSxFQUFFO1lBQ2ZSLE1BQU1JLEtBQU1KLElBQUk7UUFDbEI7UUFDQSxNQUFNUyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxNQUFNZixVQUFVZ0IsR0FBRyxDQUFDLDBCQUEwQjtZQUM3RUMsV0FBV1YsWUFBWVcsT0FBTztRQUNoQztRQUNBTCxjQUFjTSxJQUFJLENBQUNUO1FBQ25CLE1BQU1WLFVBQVVvQixHQUFHLENBQUMsMEJBQTBCTixLQUFLTyxTQUFTLENBQUNSLGdCQUFnQjtZQUMzRUksV0FBV1YsWUFBWVcsT0FBTztRQUNoQztRQUVBLE9BQU87WUFBQ0ksU0FBUyxDQUFDLHFCQUFxQixDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMzRCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU87WUFBQ0YsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN4RTtBQUNGLENBQUEsRUFBQyJ9