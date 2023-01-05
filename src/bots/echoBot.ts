import { Bot, BotError } from "./bot";
export class EchoBot extends Bot {
    constructor(public name: string) {
      super();
    }
  
    async init(): Promise<void> {}
  
    async send(message: string): Promise<string> {
      const delay = Math.floor(Math.random() * 299);
      await new Promise((resolve) => setTimeout(resolve, delay));
  
      return message;
    }
  }