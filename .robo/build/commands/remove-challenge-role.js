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
        const existingRoles = JSON.parse(await Flashcore.get('challenges-admin-roles'));
        const indexToRemove = existingRoles.findIndex((item)=>item.value === role);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxyZW1vdmUtY2hhbGxlbmdlLXJvbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnQWRkIG9yIHJlbW92ZSBjaGFsbGVuZ2Ugcm9sZXMnLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JvbGUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1JvbGUnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IGFueSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByb2xlID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXQoJ3JvbGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBKU09OLnBhcnNlKGF3YWl0IEZsYXNoY29yZS5nZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnKSk7XHJcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gZXhpc3RpbmdSb2xlcy5maW5kSW5kZXgoKGl0ZW06IGFueSkgPT4gaXRlbS52YWx1ZSA9PT0gcm9sZSk7XHJcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcclxuICAgICAgZXhpc3RpbmdSb2xlcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbiAgICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtYWRtaW4tcm9sZXMnLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1JvbGVzKSk7XHJcbiAgICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZSByb2xlIHJlbW92ZWQgYCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2Ugcm9sZSBub3QgZm91bmQuIFRyeSBydW5uaW5nICcvbGlzdC1jaGFsbGVuZ2Utcm9sZXMnIGNvbW1hbmQgdG8gc2VlIHdoYXQgcm9sZXMgYXJlIGF2YWxpYWJsZS4gYCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciByZXNldGluZyBjaGFsbGVuZ2Ugcm9sZXMgLiAuIC5gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJyZXF1aXJlZCIsImludGVyYWN0aW9uIiwicm9sZSIsImdldCIsInZhbHVlIiwiZXhpc3RpbmdSb2xlcyIsIkpTT04iLCJwYXJzZSIsImluZGV4VG9SZW1vdmUiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwic2V0Iiwic3RyaW5naWZ5IiwiY29udGVudCIsImVwaGVtZXJhbCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFFbEUsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtJQUNiQyxTQUFTO1FBQ1A7WUFDRUMsTUFBTTtZQUNORixhQUFhO1lBQ2JHLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBT0QsWUFBWUgsT0FBTyxDQUFDSyxHQUFHLENBQUMsUUFBUUMsS0FBSztRQUNsRCxNQUFNQyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxNQUFNWixVQUFVUSxHQUFHLENBQUM7UUFDckQsTUFBTUssZ0JBQWdCSCxjQUFjSSxTQUFTLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS04sS0FBSyxLQUFLRjtRQUM1RSxJQUFJTSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCSCxjQUFjTSxNQUFNLENBQUNILGVBQWU7WUFDcEMsTUFBTWIsVUFBVWlCLEdBQUcsQ0FBQywwQkFBMEJOLEtBQUtPLFNBQVMsQ0FBQ1I7WUFDN0QsT0FBTztnQkFBQ1MsU0FBUyxDQUFDLHVCQUF1QixDQUFDO2dCQUFFQyxXQUFXO1lBQUk7UUFDN0QsT0FDSztZQUNILE9BQU87Z0JBQUNELFNBQVMsQ0FBQyx1R0FBdUcsQ0FBQztnQkFBRUMsV0FBVztZQUFJO1FBQzdJO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO1lBQUNGLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDMUU7QUFDRixDQUFBLEVBQUMifQ==