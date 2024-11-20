import { Flashcore } from "robo.js";
import { EmbedBuilder } from "discord.js";
export const config = {
    description: 'Reset challenge roles to administrators.'
};
export default (async (interaction)=>{
    try {
        const roles = await Flashcore.get('challenges-admin-roles', {
            namespace: interaction.guildId
        });
        if (!roles) {
            return {
                content: 'Could not find any roles to list',
                ephemeral: true
            };
        }
        const parsed = JSON.parse(roles);
        const exampleEmbed = new EmbedBuilder().setColor(0x0099FF).setTitle('Challenge Admin Roles').setTimestamp();
        parsed && parsed.forEach((role)=>{
            console.log(role);
            if (typeof role === 'object' && 'name' in role && 'value' in role) {
                exampleEmbed.addFields({
                    name: role.name,
                    value: `<@${role.value}>`
                });
            }
            if (typeof role === 'object' && 'ownerId' in role) {
                exampleEmbed.addFields({
                    name: 'Server Owner (Locked)',
                    value: `<@${role.ownerId}>`
                });
            }
        });
        return {
            embeds: [
                exampleEmbed
            ],
            ephemeral: true
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error listing challenge roles . . .`,
            ephemeral: true
        };
    }
});
