import { challengeModal } from "../utils/utils.js";
export const config = {
    description: 'Submit a challenge'
};
export default (async (interaction)=>{
    const modal = await challengeModal();
    try {
        await interaction.showModal(modal.modal);
    } catch (error) {
        console.log(error);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxzdWJtaXQtY2hhbGxlbmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgY2hhbGxlbmdlTW9kYWwgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnU3VibWl0IGEgY2hhbGxlbmdlJywgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgY29uc3QgbW9kYWwgPSBhd2FpdCBjaGFsbGVuZ2VNb2RhbCgpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBpbnRlcmFjdGlvbi5zaG93TW9kYWwobW9kYWwubW9kYWwpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiY2hhbGxlbmdlTW9kYWwiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsImludGVyYWN0aW9uIiwibW9kYWwiLCJzaG93TW9kYWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLGNBQWMsUUFBUSxvQkFBb0I7QUFFbkQsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtBQUNmLEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsTUFBTUMsUUFBUSxNQUFNSjtJQUNwQixJQUFJO1FBQ0YsTUFBTUcsWUFBWUUsU0FBUyxDQUFDRCxNQUFNQSxLQUFLO0lBQ3pDLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7QUFDRixDQUFBLEVBQUMifQ==