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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHJvYm8tcGx1Z2luLWNoYWxsZW5nZXNcXHNyY1xcY29tbWFuZHNcXHNldC1jaGFsbGVuZ2VzLWNoYW5uZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnU2V0IGEgY2hhbm5lbCBmb3IgYXBwcm92ZWQgY2hhbGxlbmdlIHN1Ym1pc3Npb24gcmV2aWV3cy4nLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NoYW5uZWwnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0NoYWxsZW5nZXMgY2hhbm5lbCcsXHJcbiAgICAgIHR5cGU6ICdjaGFubmVsJyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICBjb25zdCBjaGFubmVsID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRDaGFubmVsKCdjaGFubmVsJyk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtY2hhbm5lbCcsIEpTT04uc3RyaW5naWZ5KGNoYW5uZWwpKTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZXMgY2hhbm5lbCBzZXQgdG8gIyR7Y2hhbm5lbC5uYW1lfWAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIHNldHRpbmcgY2hhbGxlbmdlcyBjaGFubmVsIHRvICMke2NoYW5uZWwubmFtZX1gLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnRlcmFjdGlvbiIsImNoYW5uZWwiLCJnZXRDaGFubmVsIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFFbEUsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtJQUNiQyxTQUFTO1FBQ1A7WUFDRUMsTUFBTTtZQUNORixhQUFhO1lBQ2JHLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7QUFDSCxFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLE1BQU1DLFVBQVVELFlBQVlKLE9BQU8sQ0FBQ00sVUFBVSxDQUFDO0lBQy9DLElBQUk7UUFDRixNQUFNVCxVQUFVVSxHQUFHLENBQUMsc0JBQXNCQyxLQUFLQyxTQUFTLENBQUNKO1FBQ3pELE9BQU87WUFBQ0ssU0FBUyxDQUFDLDJCQUEyQixFQUFFTCxRQUFRSixJQUFJLENBQUMsQ0FBQztZQUFFVSxXQUFXO1FBQUk7SUFDaEYsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTztZQUFDRixTQUFTLENBQUMscUNBQXFDLEVBQUVMLFFBQVFKLElBQUksQ0FBQyxDQUFDO1lBQUVVLFdBQVc7UUFBSTtJQUMxRjtBQUNGLENBQUEsRUFBQyJ9