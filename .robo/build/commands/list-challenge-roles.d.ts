import { type CommandConfig } from 'robo.js';
import { ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
export declare const config: CommandConfig;
declare const _default: (interaction: ChatInputCommandInteraction) => Promise<{
    content: string;
    ephemeral: boolean;
    embeds?: undefined;
} | {
    embeds: EmbedBuilder[];
    ephemeral: boolean;
    content?: undefined;
}>;
export default _default;
