import { Flashcore } from "robo.js";
export const config = {
    description: 'Add or remove challenge roles',
    options: [
        {
            name: 'role',
            description: 'Role',
            type: 'role',
            required: true
        }
    ]
};
export default (async (interaction)=>{
    try {
        const role = interaction.options.getRole('role');
        const roleShort = {
            value: role.id,
            name: role.name
        };
        let existingRoles = await Flashcore.get('challenges-admin-roles', {
            namespace: interaction.guildId
        });
        if (!existingRoles) {
            existingRoles = [];
        } else {
            existingRoles = JSON.parse(existingRoles);
        }
        existingRoles.push(roleShort);
        await Flashcore.set('challenges-admin-roles', JSON.stringify(existingRoles), {
            namespace: interaction.guildId
        });
        return {
            content: `Added challenge role `,
            ephemeral: true
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error adding challenge rolee . . .`,
            ephemeral: true
        };
    }
});
