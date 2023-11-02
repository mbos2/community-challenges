import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Set a channel for approved challenge submission reviews.',
    options: [
        {
            name: 'channel',
            description: 'Challenges channel',
            type: 'channel',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    const channel = interaction.options.getChannel('channel');
    try {
        await Flashcore.set('challenges-channel', JSON.stringify(channel));
        return {
            content: `Challenges channel set to #${channel.name}`,
            ephemeral: true
        };
    } catch (error) {
        return {
            content: `Error setting challenges channel to #${channel.name}`,
            ephemeral: true
        };
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxzZXQtY2hhbGxlbmdlcy1jaGFubmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1NldCBhIGNoYW5uZWwgZm9yIGFwcHJvdmVkIGNoYWxsZW5nZSBzdWJtaXNzaW9uIHJldmlld3MuJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjaGFubmVsJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdDaGFsbGVuZ2VzIGNoYW5uZWwnLFxyXG4gICAgICB0eXBlOiAnY2hhbm5lbCcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0Q2hhbm5lbCgnY2hhbm5lbCcpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLWNoYW5uZWwnLCBKU09OLnN0cmluZ2lmeShjaGFubmVsKSk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2VzIGNoYW5uZWwgc2V0IHRvICMke2NoYW5uZWwubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciBzZXR0aW5nIGNoYWxsZW5nZXMgY2hhbm5lbCB0byAjJHtjaGFubmVsLm5hbWV9YCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJjaGFubmVsIiwiZ2V0Q2hhbm5lbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkYsYUFBYTtZQUNiRyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixNQUFNQyxVQUFVRCxZQUFZSixPQUFPLENBQUNNLFVBQVUsQ0FBQztJQUMvQyxJQUFJO1FBQ0YsTUFBTVQsVUFBVVUsR0FBRyxDQUFDLHNCQUFzQkMsS0FBS0MsU0FBUyxDQUFDSjtRQUN6RCxPQUFPO1lBQUNLLFNBQVMsQ0FBQywyQkFBMkIsRUFBRUwsUUFBUUosSUFBSSxDQUFDLENBQUM7WUFBRVUsV0FBVztRQUFJO0lBQ2hGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU87WUFBQ0YsU0FBUyxDQUFDLHFDQUFxQyxFQUFFTCxRQUFRSixJQUFJLENBQUMsQ0FBQztZQUFFVSxXQUFXO1FBQUk7SUFDMUY7QUFDRixDQUFBLEVBQUMifQ==