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
        const roleSliced = role.slice(3, -1);
        const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles'));
        const indexToRemove = existingRoles.findIndex((item)=>item.value === roleSliced);
        console.log(role, roleSliced, existingRoles, indexToRemove);
        if (indexToRemove !== -1) {
            existingRoles.splice(indexToRemove, 1);
            await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZW1vdmUtY2hhbGxlbmdlLXJvbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnQWRkIG9yIHJlbW92ZSBjaGFsbGVuZ2Ugcm9sZXMnLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JvbGUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1JvbGUnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IGFueSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByb2xlID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ3JvbGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IHJvbGVTbGljZWQgPSByb2xlLnNsaWNlKDMsIC0xKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBKU09OLnBhcnNlKGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnKSk7XHJcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gZXhpc3RpbmdSb2xlcy5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS52YWx1ZSA9PT0gcm9sZVNsaWNlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhyb2xlLCByb2xlU2xpY2VkLCBleGlzdGluZ1JvbGVzLCBpbmRleFRvUmVtb3ZlKVxyXG4gICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgIGV4aXN0aW5nUm9sZXMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xyXG4gICAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWFkbWluLXJvbGVzJywgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdSb2xlcykpO1xyXG4gICAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2Ugcm9sZSByZW1vdmVkIGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlIHJvbGUgbm90IGZvdW5kLiBUcnkgcnVubmluZyAnL2xpc3QtY2hhbGxlbmdlLXJvbGVzJyBjb21tYW5kIHRvIHNlZSB3aGF0IHJvbGVzIGFyZSBhdmFsaWFibGUuIGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgcmVzZXRpbmcgY2hhbGxlbmdlIHJvbGVzIC4gLiAuYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJuYW1lIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsInJvbGUiLCJnZXQiLCJ2YWx1ZSIsInJvbGVTbGljZWQiLCJzbGljZSIsImV4aXN0aW5nUm9sZXMiLCJKU09OIiwicGFyc2UiLCJpbmRleFRvUmVtb3ZlIiwiZmluZEluZGV4IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJzZXQiLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkYsYUFBYTtZQUNiRyxVQUFVO1FBQ1o7S0FDRDtBQUNILEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLE9BQU9ELFlBQVlILE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLFFBQVFDLEtBQUs7UUFDbEQsTUFBTUMsYUFBYUgsS0FBS0ksS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNQyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxNQUFNZCxVQUFVUSxHQUFHLENBQUM7UUFDckQsTUFBTU8sZ0JBQWdCSCxjQUFjSSxTQUFTLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS1IsS0FBSyxLQUFLQztRQUM1RVEsUUFBUUMsR0FBRyxDQUFDWixNQUFNRyxZQUFZRSxlQUFlRztRQUM3QyxJQUFJQSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCSCxjQUFjUSxNQUFNLENBQUNMLGVBQWU7WUFDcEMsTUFBTWYsVUFBVXFCLEdBQUcsQ0FBQywwQkFBMEJSLEtBQUtTLFNBQVMsQ0FBQ1Y7WUFDN0QsT0FBTztnQkFBQ1csU0FBUyxDQUFDLHVCQUF1QixDQUFDO2dCQUFFQyxXQUFXO1lBQUk7UUFDN0QsT0FDSztZQUNILE9BQU87Z0JBQUNELFNBQVMsQ0FBQyx1R0FBdUcsQ0FBQztnQkFBRUMsV0FBVztZQUFJO1FBQzdJO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RQLFFBQVFDLEdBQUcsQ0FBQ007UUFDWixPQUFPO1lBQUNGLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDMUU7QUFDRixDQUFBLEVBQUMifQ==