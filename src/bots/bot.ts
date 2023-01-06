export type BotError = {};

export interface Bot {
  init(): Promise<void>;
  send(message: string): Promise<string>;
}
