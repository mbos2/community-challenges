import { Flashcore } from "robo.js";
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
