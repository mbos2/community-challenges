import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Set a channel for challenge submission reviews',
    options: [
        {
            name: 'channel',
            description: 'Challenges review channel',
            type: 'channel',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    const channel = interaction.options.getChannel('channel');
    try {
        await Flashcore.set('challenges-review-channel', JSON.stringify(channel));
        return {
            content: `Challenges review channel set to #${channel.name}`,
            ephemeral: true
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error setting challenges review channel to #${channel.name}`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXHNldC1jaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1NldCBhIGNoYW5uZWwgZm9yIGNoYWxsZW5nZSBzdWJtaXNzaW9uIHJldmlld3MnLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NoYW5uZWwnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0NoYWxsZW5nZXMgcmV2aWV3IGNoYW5uZWwnLFxyXG4gICAgICB0eXBlOiAnY2hhbm5lbCcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0Q2hhbm5lbCgnY2hhbm5lbCcpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsJywgSlNPTi5zdHJpbmdpZnkoY2hhbm5lbCkpO1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlcyByZXZpZXcgY2hhbm5lbCBzZXQgdG8gIyR7Y2hhbm5lbC5uYW1lfWAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3Igc2V0dGluZyBjaGFsbGVuZ2VzIHJldmlldyBjaGFubmVsIHRvICMke2NoYW5uZWwubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkYsYUFBYTtZQUNiRyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixNQUFNQyxVQUFVRCxZQUFZSixPQUFPLENBQUNNLFVBQVUsQ0FBQztJQUMvQyxJQUFJO1FBQ0YsTUFBTVQsVUFBVVUsR0FBRyxDQUFDLDZCQUE2QkMsS0FBS0MsU0FBUyxDQUFDSjtRQUNoRSxPQUFPO1lBQUNLLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRUwsUUFBUUosSUFBSSxDQUFDLENBQUM7WUFBRVUsV0FBVztRQUFJO0lBQ3ZGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBTztZQUFDRixTQUFTLENBQUMsNENBQTRDLEVBQUVMLFFBQVFKLElBQUksQ0FBQyxDQUFDO1lBQUVVLFdBQVc7UUFBSTtJQUNqRztBQUNGLENBQUEsRUFBQyJ9