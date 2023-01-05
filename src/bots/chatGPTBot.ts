import { Bot, BotError } from "./bot";
import { OpenAICredentials } from "./openaiAuth";
export class ChatGPTBot extends Bot {
    constructor(public name: string, public credentials: OpenAICredentials) {
      super();
    }
  
    async init(): Promise<void> {}
    async send(message: string): Promise<string> {
        return "";
    }
  }