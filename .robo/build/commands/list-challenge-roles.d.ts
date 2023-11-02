import { type CommandConfig } from '@roboplay/robo.js';
import { EmbedBuilder } from 'discord.js';
export declare const config: CommandConfig;
declare const _default: (interaction: any) => Promise<{
    embeds: EmbedBuilder[];
    ephemeral: boolean;
    content?: undefined;
} | {
    content: string;
    ephemeral: boolean;
    embeds?: undefined;
}>;
export default _default;
