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
        await Flashcore.set('challenges-channel', JSON.stringify(channel), {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxzZXQtY2hhbGxlbmdlcy1jaGFubmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG5pbXBvcnQgeyBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdTZXQgYSBjaGFubmVsIGZvciBhcHByb3ZlZCBjaGFsbGVuZ2Ugc3VibWlzc2lvbiByZXZpZXdzLicsXHJcbiAgb3B0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY2hhbm5lbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhbGxlbmdlcyBjaGFubmVsJyxcclxuICAgICAgdHlwZTogJ2NoYW5uZWwnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldENoYW5uZWwoJ2NoYW5uZWwnKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1jaGFubmVsJywgSlNPTi5zdHJpbmdpZnkoY2hhbm5lbCksIHtcclxuICAgICAgbmFtZXNwYWNlOiBpbnRlcmFjdGlvbi5ndWlsZElkIVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2VzIGNoYW5uZWwgc2V0IHRvICMke2NoYW5uZWwhLm5hbWV9YCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3Igc2V0dGluZyBjaGFsbGVuZ2VzIGNoYW5uZWwgdG8gIyR7Y2hhbm5lbCEubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBR2xFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkYsYUFBYTtZQUNiRyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixNQUFNQyxVQUFVRCxZQUFZSixPQUFPLENBQUNNLFVBQVUsQ0FBQztJQUMvQyxJQUFJO1FBQ0YsTUFBTVQsVUFBVVUsR0FBRyxDQUFDLHNCQUFzQkMsS0FBS0MsU0FBUyxDQUFDSixVQUFVO1lBQ2pFSyxXQUFXTixZQUFZTyxPQUFPO1FBQ2hDO1FBQ0EsT0FBTztZQUFDQyxTQUFTLENBQUMsMkJBQTJCLEVBQUVQLFFBQVNKLElBQUksQ0FBQyxDQUFDO1lBQUVZLFdBQVc7UUFBSTtJQUNqRixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPO1lBQUNGLFNBQVMsQ0FBQyxxQ0FBcUMsRUFBRVAsUUFBU0osSUFBSSxDQUFDLENBQUM7WUFBRVksV0FBVztRQUFJO0lBQzNGO0FBQ0YsQ0FBQSxFQUFDIn0=