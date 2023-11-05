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
        await Flashcore.set('challenges-review-channel', JSON.stringify(channel), {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxzZXQtY2hhbGxlbmdlcy1yZXZpZXctY2hhbm5lbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgQ2hhdElucHV0Q29tbWFuZEludGVyYWN0aW9uIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnU2V0IGEgY2hhbm5lbCBmb3IgY2hhbGxlbmdlIHN1Ym1pc3Npb24gcmV2aWV3cycsXHJcbiAgb3B0aW9uczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY2hhbm5lbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2hhbGxlbmdlcyByZXZpZXcgY2hhbm5lbCcsXHJcbiAgICAgIHR5cGU6ICdjaGFubmVsJyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICBjb25zdCBjaGFubmVsID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRDaGFubmVsKCdjaGFubmVsJyk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWwnLCBKU09OLnN0cmluZ2lmeShjaGFubmVsKSwge1xyXG4gICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZXMgcmV2aWV3IGNoYW5uZWwgc2V0IHRvICMke2NoYW5uZWwhLm5hbWV9YCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciBzZXR0aW5nIGNoYWxsZW5nZXMgcmV2aWV3IGNoYW5uZWwgdG8gIyR7Y2hhbm5lbCEubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUdsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtBQUNILEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsTUFBTUMsVUFBVUQsWUFBWUosT0FBTyxDQUFDTSxVQUFVLENBQUM7SUFDL0MsSUFBSTtRQUNGLE1BQU1ULFVBQVVVLEdBQUcsQ0FBQyw2QkFBNkJDLEtBQUtDLFNBQVMsQ0FBQ0osVUFBVTtZQUN4RUssV0FBV04sWUFBWU8sT0FBTztRQUNoQztRQUNBLE9BQU87WUFBQ0MsU0FBUyxDQUFDLGtDQUFrQyxFQUFFUCxRQUFTSixJQUFJLENBQUMsQ0FBQztZQUFFWSxXQUFXO1FBQUk7SUFDeEYsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO1lBQUNGLFNBQVMsQ0FBQyw0Q0FBNEMsRUFBRVAsUUFBU0osSUFBSSxDQUFDLENBQUM7WUFBRVksV0FBVztRQUFJO0lBQ2xHO0FBQ0YsQ0FBQSxFQUFDIn0=