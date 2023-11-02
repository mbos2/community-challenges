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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFxzZXQtY2hhbGxlbmdlcy1yZXZpZXctY2hhbm5lbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaGNvcmUsIHR5cGUgQ29tbWFuZENvbmZpZyB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbW1hbmRDb25maWcgPSB7XHJcbiAgZGVzY3JpcHRpb246ICdTZXQgYSBjaGFubmVsIGZvciBjaGFsbGVuZ2Ugc3VibWlzc2lvbiByZXZpZXdzJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjaGFubmVsJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdDaGFsbGVuZ2VzIHJldmlldyBjaGFubmVsJyxcclxuICAgICAgdHlwZTogJ2NoYW5uZWwnLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IGFueSkgPT4ge1xyXG4gIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldENoYW5uZWwoJ2NoYW5uZWwnKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1yZXZpZXctY2hhbm5lbCcsIEpTT04uc3RyaW5naWZ5KGNoYW5uZWwpKTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZXMgcmV2aWV3IGNoYW5uZWwgc2V0IHRvICMke2NoYW5uZWwubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIHNldHRpbmcgY2hhbGxlbmdlcyByZXZpZXcgY2hhbm5lbCB0byAjJHtjaGFubmVsLm5hbWV9YCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwiaW50ZXJhY3Rpb24iLCJjaGFubmVsIiwiZ2V0Q2hhbm5lbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQTRCLG9CQUFvQjtBQUVsRSxPQUFPLE1BQU1DLFNBQXdCO0lBQ25DQyxhQUFhO0lBQ2JDLFNBQVM7UUFDUDtZQUNFQyxNQUFNO1lBQ05GLGFBQWE7WUFDYkcsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtBQUNILEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsTUFBTUMsVUFBVUQsWUFBWUosT0FBTyxDQUFDTSxVQUFVLENBQUM7SUFDL0MsSUFBSTtRQUNGLE1BQU1ULFVBQVVVLEdBQUcsQ0FBQyw2QkFBNkJDLEtBQUtDLFNBQVMsQ0FBQ0o7UUFDaEUsT0FBTztZQUFDSyxTQUFTLENBQUMsa0NBQWtDLEVBQUVMLFFBQVFKLElBQUksQ0FBQyxDQUFDO1lBQUVVLFdBQVc7UUFBSTtJQUN2RixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU87WUFBQ0YsU0FBUyxDQUFDLDRDQUE0QyxFQUFFTCxRQUFRSixJQUFJLENBQUMsQ0FBQztZQUFFVSxXQUFXO1FBQUk7SUFDakc7QUFDRixDQUFBLEVBQUMifQ==