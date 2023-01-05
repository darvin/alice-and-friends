import { Bot, BotError } from "./bot";

export class DBReplayBot extends Bot {
  constructor(public name: string) {
    super();
  }

  async init(): Promise<void> {}
  async send(message: string): Promise<string> {
    return "";
  }
}
