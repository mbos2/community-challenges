import { ActionRowBuilder, ModalBuilder } from 'discord.js';
export declare const challengeModal: () => Promise<{
    modal: ModalBuilder;
}>;
export declare const challengeReviewButtonComponent: () => ActionRowBuilder<import("@discordjs/builders").AnyComponentBuilder>;
export declare const isAdmin: (bitfield: any) => boolean;
export declare const userHasPermission: (user: any, guildOwnerId: any) => Promise<boolean>;
export declare const listChallengeRoles: () => Promise<any>;
