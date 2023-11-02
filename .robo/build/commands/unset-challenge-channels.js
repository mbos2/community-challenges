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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFx1bnNldC1jaGFsbGVuZ2UtY2hhbm5lbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnVW5zZXRzIGNoYWxsZW5nZSBjaGFubmVscy4nLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoaW50ZXJhY3Rpb246IGFueSkgPT4ge1xyXG4gIGNvbnN0IGNoYW5uZWwgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldENoYW5uZWwoJ2NoYW5uZWwnKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1jaGFubmVsJywgbnVsbCk7XHJcbiAgICBhd2FpdCBGbGFzaGNvcmUuc2V0KCdjaGFsbGVuZ2VzLXJldmlldy1jaGFubmVsJywgbnVsbCk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBDaGFsbGVuZ2VzIGNoYW5uZWxzIHVuc2V0YCwgZXBoZW1lcmFsOiB0cnVlfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3IgdW5zZXR0aW5nIGNoYWxsZW5nZXMgY2hhbm5lbHNgLCBlcGhlbWVyYWw6IHRydWV9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkZsYXNoY29yZSIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaW50ZXJhY3Rpb24iLCJjaGFubmVsIiwib3B0aW9ucyIsImdldENoYW5uZWwiLCJzZXQiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBRWxFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7QUFDZixFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLE1BQU1DLFVBQVVELFlBQVlFLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO0lBQy9DLElBQUk7UUFDRixNQUFNTixVQUFVTyxHQUFHLENBQUMsc0JBQXNCO1FBQzFDLE1BQU1QLFVBQVVPLEdBQUcsQ0FBQyw2QkFBNkI7UUFDakQsT0FBTztZQUFDQyxTQUFTLENBQUMseUJBQXlCLENBQUM7WUFBRUMsV0FBVztRQUFJO0lBQy9ELEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU87WUFBQ0YsU0FBUyxDQUFDLG1DQUFtQyxDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUN6RTtBQUNGLENBQUEsRUFBQyJ9