import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Unsets challenge channels.'
};
export default (async (interaction)=>{
    try {
        await Flashcore.delete('challenges-channel', {
            namespace: interaction.guildId
        });
        await Flashcore.delete('challenges-review-channel', {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFx1bnNldC1jaGFsbGVuZ2UtY2hhbm5lbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1Vuc2V0cyBjaGFsbGVuZ2UgY2hhbm5lbHMuJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLmRlbGV0ZSgnY2hhbGxlbmdlcy1jaGFubmVsJywge1xyXG4gICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IEZsYXNoY29yZS5kZWxldGUoJ2NoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWwnLCB7XHJcbiAgICAgIG5hbWVzcGFjZTogaW50ZXJhY3Rpb24uZ3VpbGRJZCFcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgQ2hhbGxlbmdlcyBjaGFubmVscyB1bnNldGAsIGVwaGVtZXJhbDogdHJ1ZX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7Y29udGVudDogYEVycm9yIHVuc2V0dGluZyBjaGFsbGVuZ2VzIGNoYW5uZWxzYCwgZXBoZW1lcmFsOiB0cnVlfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJGbGFzaGNvcmUiLCJjb25maWciLCJkZXNjcmlwdGlvbiIsImludGVyYWN0aW9uIiwiZGVsZXRlIiwibmFtZXNwYWNlIiwiZ3VpbGRJZCIsImNvbnRlbnQiLCJlcGhlbWVyYWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFHbEUsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtBQUNmLEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsSUFBSTtRQUNGLE1BQU1ILFVBQVVJLE1BQU0sQ0FBQyxzQkFBc0I7WUFDM0NDLFdBQVdGLFlBQVlHLE9BQU87UUFDaEM7UUFDQSxNQUFNTixVQUFVSSxNQUFNLENBQUMsNkJBQTZCO1lBQ2xEQyxXQUFXRixZQUFZRyxPQUFPO1FBQ2hDO1FBQ0EsT0FBTztZQUFDQyxTQUFTLENBQUMseUJBQXlCLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQy9ELEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU87WUFBQ0YsU0FBUyxDQUFDLG1DQUFtQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN6RTtBQUNGLENBQUEsRUFBQyJ9