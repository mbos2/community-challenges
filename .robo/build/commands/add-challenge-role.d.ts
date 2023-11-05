import { type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction } from 'discord.js';
export declare const config: CommandConfig;
declare const _default: (interaction: ChatInputCommandInteraction) => Promise<{
    content: string;
    ephemeral: boolean;
}>;
export default _default;
