import { Bot, BotError } from "./bot";
import { OpenAICredentials } from "./openaiAuth";
class ChatGPTBot extends Bot {
    constructor(public name: string, public credentials: OpenAICredentials) {
      super();
    }
  
    async init(): Promise<void | BotError> {}
    async send(message: string): Promise<string | BotError> {

    }
  }