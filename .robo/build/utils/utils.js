import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle } from "discord.js";
import { Flashcore } from "robo.js";
export const challengeModal = async ()=>{
    const modal = new ModalBuilder().setCustomId('challenge-modal').setTitle('Submit a challenge');
    const content = new TextInputBuilder().setCustomId('challenge').setLabel("Challenge content").setStyle(TextInputStyle.Paragraph).setRequired(true).setPlaceholder('Your challenge content here! It supports discord markdown!').setMinLength(200).setMaxLength(4000);
    const firstActionRow = new ActionRowBuilder().addComponents(content);
    modal.addComponents(firstActionRow);
    return {
        modal: modal
    };
};
export const challengeReviewButtonComponent = ()=>{
    const approve = new ButtonBuilder().setCustomId('approveChallenge').setLabel('Approve').setStyle(ButtonStyle.Success);
    const cancel = new ButtonBuilder().setCustomId('rejectChallenge').setLabel('Reject').setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder().addComponents(approve, cancel);
    return row;
};
export const isAdmin = (bitfield)=>{
    const adminBit = 8; // The bit for the ADMINISTRATOR permission
    return (bitfield & BigInt(adminBit)) === BigInt(adminBit);
};
export const userHasChallengeReviewPermission = async (user, guildOwnerId, guildId)=>{
    let hasPermission = false;
    if (user.id === guildOwnerId) {
        hasPermission = true;
        return hasPermission;
    }
    const roles = await Flashcore.get('challenges-admin-roles', {
        namespace: guildId
    });
    const parsedRoles = JSON.parse(roles);
    const userRoles = user.roles.cache;
    userRoles.forEach((role)=>{
        const id = role.id;
        const exists = parsedRoles.some((obj)=>obj.value === id);
        if (exists) {
            hasPermission = true;
            return hasPermission;
        }
    });
    return hasPermission;
};
export const listChallengeRoles = async (guildId)=>{
    const roles = [];
    const existingRolesFlashcore = await Flashcore.get('challenges-admin-roles', {
        namespace: guildId
    });
    const existingRoles = existingRolesFlashcore ? JSON.parse(existingRolesFlashcore) : [];
    existingRoles && existingRoles.map((role)=>{
        if (typeof role === 'object' && 'name' in role && 'id' in role) {
            roles.push({
                name: role.name,
                value: role.id
            });
        }
    });
    return roles;
};
export const setInitialChallengeRolesIfNotExisting = async (interaction)=>{
    const guildId = interaction.guildId;
    if (!guildId) {
        console.log('No guild id found for the interaction, cannot set initial challenge roles. . .');
        return;
    }
    const adminRoles = await Flashcore.get('challenges-admin-roles', {
        namespace: guildId
    });
    if (!adminRoles) {
        console.log(`No challenges review roles found for the guild id: ${guildId}, setting default roles. . .`);
        const guildMember = interaction.member;
        const guildData = guildMember.guild;
        const guildRoles = guildData.roles.cache;
        const roles = [];
        if (guildRoles) {
            guildRoles.forEach((role)=>{
                if (isAdmin(role.permissions.bitfield)) {
                    roles.push({
                        value: role.id,
                        name: role.name
                    });
                }
            });
        }
        roles.push({
            ownerId: guildData.ownerId
        });
        await Flashcore.set('challenges-admin-roles', JSON.stringify(roles), {
            namespace: guildId
        });
        console.log(`Default challenge review roles set for the guild id: ${guildId}`);
    } else {
        console.log(`Challenge review roles already set for the guild id: ${guildId}`);
    }
};
