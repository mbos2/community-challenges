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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxhZGQtY2hhbGxlbmdlLXJvbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IElHdWlsZFJvbGVTaG9ydCB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnQWRkIG9yIHJlbW92ZSBjaGFsbGVuZ2Ugcm9sZXMnLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JvbGUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1JvbGUnLFxyXG4gICAgICB0eXBlOiAncm9sZScsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvbGUgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFJvbGUoJ3JvbGUnKTtcclxuICAgIGNvbnN0IHJvbGVTaG9ydDogSUd1aWxkUm9sZVNob3J0ID0ge1xyXG4gICAgICB2YWx1ZTogcm9sZS5pZCxcclxuICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgfSAgIFxyXG4gICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IEpTT04ucGFyc2UoYXdhaXQgRmxhc2hjb3JlLmdldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycpKTtcclxuICAgIGV4aXN0aW5nUm9sZXMucHVzaChyb2xlU2hvcnQpO1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1hZG1pbi1yb2xlcycsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUm9sZXMpKTtcclxuXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBBZGRlZCBjaGFsbGVuZ2Ugcm9sZSBgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIGFkZGluZyBjaGFsbGVuZ2Ugcm9sZWUgLiAuIC5gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsInJvbGUiLCJnZXRSb2xlIiwicm9sZVNob3J0IiwidmFsdWUiLCJpZCIsImV4aXN0aW5nUm9sZXMiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJwdXNoIiwic2V0Iiwic3RyaW5naWZ5IiwiY29udGVudCIsImVwaGVtZXJhbCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFHbEUsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtJQUNiQyxTQUFTO1FBQ1A7WUFDRUMsTUFBTTtZQUNORixhQUFhO1lBQ2JHLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7QUFDSCxFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxPQUFPRCxZQUFZSixPQUFPLENBQUNNLE9BQU8sQ0FBQztRQUN6QyxNQUFNQyxZQUE2QjtZQUNqQ0MsT0FBT0gsS0FBS0ksRUFBRTtZQUNkUixNQUFNSSxLQUFLSixJQUFJO1FBQ2pCO1FBQ0EsTUFBTVMsZ0JBQWdCQyxLQUFLQyxLQUFLLENBQUMsTUFBTWYsVUFBVWdCLEdBQUcsQ0FBQztRQUNyREgsY0FBY0ksSUFBSSxDQUFDUDtRQUNuQixNQUFNVixVQUFVa0IsR0FBRyxDQUFDLDBCQUEwQkosS0FBS0ssU0FBUyxDQUFDTjtRQUU3RCxPQUFPO1lBQUNPLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDM0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO1lBQUNGLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDeEU7QUFDRixDQUFBLEVBQUMifQ==