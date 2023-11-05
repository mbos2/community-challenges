import { Flashcore } from "@roboplay/robo.js";
export const config = {
    description: 'Unsets challenge channels.'
};
export default (async (interaction)=>{
    try {
        await Flashcore.set('challenges-channel', null, {
            namespace: interaction.guildId
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXGNvbW11bml0eS1jaGFsbGVuZ2VzXFxzcmNcXGNvbW1hbmRzXFx1bnNldC1jaGFsbGVuZ2UtY2hhbm5lbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhc2hjb3JlLCB0eXBlIENvbW1hbmRDb25maWcgfSBmcm9tICdAcm9ib3BsYXkvcm9iby5qcyc7XHJcbmltcG9ydCB7IENoYXRJbnB1dENvbW1hbmRJbnRlcmFjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1Vuc2V0cyBjaGFsbGVuZ2UgY2hhbm5lbHMuJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgRmxhc2hjb3JlLnNldCgnY2hhbGxlbmdlcy1jaGFubmVsJywgbnVsbCwge1xyXG4gICAgICBuYW1lc3BhY2U6IGludGVyYWN0aW9uLmd1aWxkSWQhXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IEZsYXNoY29yZS5zZXQoJ2NoYWxsZW5nZXMtcmV2aWV3LWNoYW5uZWwnLCBudWxsKTtcclxuICAgIHJldHVybiB7Y29udGVudDogYENoYWxsZW5nZXMgY2hhbm5lbHMgdW5zZXRgLCBlcGhlbWVyYWw6IHRydWV9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge2NvbnRlbnQ6IGBFcnJvciB1bnNldHRpbmcgY2hhbGxlbmdlcyBjaGFubmVsc2AsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJpbnRlcmFjdGlvbiIsInNldCIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBNEIsb0JBQW9CO0FBR2xFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7QUFDZixFQUFDO0FBRUQsZUFBZSxDQUFBLE9BQU9DO0lBQ3BCLElBQUk7UUFDRixNQUFNSCxVQUFVSSxHQUFHLENBQUMsc0JBQXNCLE1BQU07WUFDOUNDLFdBQVdGLFlBQVlHLE9BQU87UUFDaEM7UUFDQSxNQUFNTixVQUFVSSxHQUFHLENBQUMsNkJBQTZCO1FBQ2pELE9BQU87WUFBQ0csU0FBUyxDQUFDLHlCQUF5QixDQUFDO1lBQUVDLFdBQVc7UUFBSTtJQUMvRCxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPO1lBQUNGLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDekU7QUFDRixDQUFBLEVBQUMifQ==