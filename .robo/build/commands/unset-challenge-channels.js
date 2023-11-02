import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Unsets challenge channels.'
};
export default (async (interaction)=>{
    const channel = interaction.options.getChannel('channel');
    try {
        await Flashcore.set('challenges-channel', null);
        await Flashcore.set('challenges-review-channel', null);
        return {
            content: `Challenges channels unset`,
            ephemeral: true
        };
    } catch (error) {
        return {
            content: `Error unsetting challenges channels`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXHVuc2V0LWNoYWxsZW5nZS1jaGFubmVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdVbnNldHMgY2hhbGxlbmdlIGNoYW5uZWxzLicsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0Q2hhbm5lbCgnY2hhbm5lbCcpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWNoYW5uZWwnLCBudWxsKTtcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWwnLCBudWxsKTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZXMgY2hhbm5lbHMgdW5zZXRgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciB1bnNldHRpbmcgY2hhbGxlbmdlcyBjaGFubmVsc2AsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJpbnRlcmFjdGlvbiIsImNoYW5uZWwiLCJvcHRpb25zIiwiZ2V0Q2hhbm5lbCIsInNldCIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFFbEUsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtBQUNmLEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsTUFBTUMsVUFBVUQsWUFBWUUsT0FBTyxDQUFDQyxVQUFVLENBQUM7SUFDL0MsSUFBSTtRQUNGLE1BQU1OLFVBQVVPLEdBQUcsQ0FBQyxzQkFBc0I7UUFDMUMsTUFBTVAsVUFBVU8sR0FBRyxDQUFDLDZCQUE2QjtRQUNqRCxPQUFPO1lBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDL0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTztZQUFDRixTQUFTLENBQUMsbUNBQW1DLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQ3pFO0FBQ0YsQ0FBQSxFQUFDIn0=