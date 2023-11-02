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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXHJlbW92ZS1jaGFsbGVuZ2Utcm9sZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdBZGQgb3IgcmVtb3ZlIGNoYWxsZW5nZSByb2xlcycsXHJcbiAgb3B0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAncm9sZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnUm9sZScsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvbGUgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldCgncm9sZScpLnZhbHVlO1xyXG4gICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IEpTT04ucGFyc2UoYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycpKTtcclxuICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBleGlzdGluZ1JvbGVzLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiBpdGVtLnZhbHVlID09PSByb2xlKTtcclxuICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xyXG4gICAgICBleGlzdGluZ1JvbGVzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcclxuICAgICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUm9sZXMpKTtcclxuICAgICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlIHJvbGUgcmVtb3ZlZCBgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZSByb2xlIG5vdCBmb3VuZC4gVHJ5IHJ1bm5pbmcgJy9saXN0LWNoYWxsZW5nZS1yb2xlcycgY29tbWFuZCB0byBzZWUgd2hhdCByb2xlcyBhcmUgYXZhbGlhYmxlLiBgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIHJlc2V0aW5nIGNoYWxsZW5nZSByb2xlcyAuIC4gLmAsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwibmFtZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJyb2xlIiwiZ2V0IiwidmFsdWUiLCJleGlzdGluZ1JvbGVzIiwiSlNPTiIsInBhcnNlIiwiaW5kZXhUb1JlbW92ZSIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJzZXQiLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUVsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsVUFBVTtRQUNaO0tBQ0Q7QUFDSCxFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxPQUFPRCxZQUFZSCxPQUFPLENBQUNLLEdBQUcsQ0FBQyxRQUFRQyxLQUFLO1FBQ2xELE1BQU1DLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDLE1BQU1aLFVBQVVRLEdBQUcsQ0FBQztRQUNyRCxNQUFNSyxnQkFBZ0JILGNBQWNJLFNBQVMsQ0FBQyxDQUFDQyxPQUFjQSxLQUFLTixLQUFLLEtBQUtGO1FBQzVFLElBQUlNLGtCQUFrQixDQUFDLEdBQUc7WUFDeEJILGNBQWNNLE1BQU0sQ0FBQ0gsZUFBZTtZQUNwQyxNQUFNYixVQUFVaUIsR0FBRyxDQUFDLDBCQUEwQk4sS0FBS08sU0FBUyxDQUFDUjtZQUM3RCxPQUFPO2dCQUFDUyxTQUFTLENBQUMsdUJBQXVCLENBQUM7Z0JBQUVDLFdBQVc7WUFBSTtRQUM3RCxPQUNLO1lBQ0gsT0FBTztnQkFBQ0QsU0FBUyxDQUFDLHVHQUF1RyxDQUFDO2dCQUFFQyxXQUFXO1lBQUk7UUFDN0k7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU87WUFBQ0YsU0FBUyxDQUFDLG9DQUFvQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMxRTtBQUNGLENBQUEsRUFBQyJ9