import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Add or remove challenge roles',
    options: [
        {
            name: 'role',
            description: 'Role',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    try {
        const role = interaction.options.get('role').value;
        const roleSliced = role?.slice(3, -1);
        const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles', {
            namespace: interaction.guildId
        }));
        const indexToRemove = existingRoles.findIndex((item)=>item.value === roleSliced);
        if (indexToRemove !== -1) {
            existingRoles.splice(indexToRemove, 1);
            await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles), {
                namespace: interaction.guildId
            });
            return {
                content: `Challenge role removed `,
                ephemeral: true
            };
        } else {
            return {
                content: `Challenge role not found. Try running '/list-challenge-roles' command to see what roles are avaliable. `,
                ephemeral: true
            };
        }
    } catch (error) {
        console.log(error);
        return {
            content: `Error reseting challenge roles . . .`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZW1vdmUtY2hhbGxlbmdlLXJvbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ0FkZCBvciByZW1vdmUgY2hhbGxlbmdlIHJvbGVzJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyb2xlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdSb2xlJyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgcm9sZSA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KCdyb2xlJykhLnZhbHVlIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHJvbGVTbGljZWQgPSByb2xlPy5zbGljZSgzLCAtMSk7XHJcbiAgICBjb25zdCBleGlzdGluZ1JvbGVzID0gSlNPTi5wYXJzZShhd2FpdCBGbGFzaGNvcmUuZ2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywge1xyXG4gICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gZXhpc3RpbmdSb2xlcy5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS52YWx1ZSA9PT0gcm9sZVNsaWNlZCk7XHJcblxyXG4gICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgIGV4aXN0aW5nUm9sZXMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xyXG4gICAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdSb2xlcyksIHtcclxuICAgICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2Ugcm9sZSByZW1vdmVkIGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlIHJvbGUgbm90IGZvdW5kLiBUcnkgcnVubmluZyAnL2xpc3QtY2hhbGxlbmdlLXJvbGVzJyBjb21tYW5kIHRvIHNlZSB3aGF0IHJvbGVzIGFyZSBhdmFsaWFibGUuIGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgcmVzZXRpbmcgY2hhbGxlbmdlIHJvbGVzIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJuYW1lIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsInJvbGUiLCJnZXQiLCJ2YWx1ZSIsInJvbGVTbGljZWQiLCJzbGljZSIsImV4aXN0aW5nUm9sZXMiLCJKU09OIiwicGFyc2UiLCJuYW1lc3BhY2UiLCJndWlsZElkIiwiaW5kZXhUb1JlbW92ZSIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJzZXQiLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUdsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsVUFBVTtRQUNaO0tBQ0Q7QUFDSCxFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxPQUFPRCxZQUFZSCxPQUFPLENBQUNLLEdBQUcsQ0FBQyxRQUFTQyxLQUFLO1FBQ25ELE1BQU1DLGFBQWFILE1BQU1JLE1BQU0sR0FBRyxDQUFDO1FBQ25DLE1BQU1DLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDLE1BQU1kLFVBQVVRLEdBQUcsQ0FBQywwQkFBMEI7WUFDN0VPLFdBQVdULFlBQVlVLE9BQU87UUFDaEM7UUFDQSxNQUFNQyxnQkFBZ0JMLGNBQWNNLFNBQVMsQ0FBQyxDQUFDQyxPQUFjQSxLQUFLVixLQUFLLEtBQUtDO1FBRTVFLElBQUlPLGtCQUFrQixDQUFDLEdBQUc7WUFDeEJMLGNBQWNRLE1BQU0sQ0FBQ0gsZUFBZTtZQUNwQyxNQUFNakIsVUFBVXFCLEdBQUcsQ0FBQywwQkFBMEJSLEtBQUtTLFNBQVMsQ0FBQ1YsZ0JBQWdCO2dCQUMzRUcsV0FBV1QsWUFBWVUsT0FBTztZQUNoQztZQUNBLE9BQU87Z0JBQUNPLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztnQkFBRUMsV0FBVztZQUFJO1FBQzdELE9BQ0s7WUFDSCxPQUFPO2dCQUFDRCxTQUFTLENBQUMsdUdBQXVHLENBQUM7Z0JBQUVDLFdBQVc7WUFBSTtRQUM3STtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBTztZQUFDRixTQUFTLENBQUMsb0NBQW9DLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQzFFO0FBQ0YsQ0FBQSxFQUFDIn0=