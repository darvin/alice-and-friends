
export type BotError = {};

export abstract class Bot {
    abstract init(): Promise<void>;
    abstract send(message: string): Promise<string | BotError>;
  
  }