import { ActionRowBuilder, ModalBuilder, GuildMember, ButtonInteraction } from 'discord.js';
import { IGuildRoleShort, IOwner } from '../common/types';
export declare const challengeModal: () => Promise<{
    modal: ModalBuilder;
}>;
export declare const challengeReviewButtonComponent: () => ActionRowBuilder<import("@discordjs/builders").AnyComponentBuilder>;
export declare const isAdmin: (bitfield: any) => boolean;
export declare const userHasChallengeReviewPermission: (user: GuildMember, guildOwnerId: string, guildId: string) => Promise<boolean>;
export declare const listChallengeRoles: (guildId: string) => Promise<(IGuildRoleShort | IOwner)[]>;
export declare const setInitialChallengeRolesIfNotExisting: (interaction: ButtonInteraction) => Promise<void>;
