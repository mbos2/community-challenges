import { type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
export declare const config: CommandConfig;
declare const _default: (interaction: ChatInputCommandInteraction) => Promise<{
    embeds: EmbedBuilder[];
    ephemeral: boolean;
    content?: undefined;
} | {
    content: string;
    ephemeral: boolean;
    embeds?: undefined;
}>;
export default _default;
