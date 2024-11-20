import { Flashcore } from "robo.js";
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
