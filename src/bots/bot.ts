import { OpenAICredentials } from "./openaiAuth";
export type BotError = {};

export abstract class Bot {
    abstract init(): Promise<void | BotError>;
    abstract send(message: string): Promise<string | BotError>;
  
    static create(params: {
      type: "ChatGPTBot" | "DummyBot" | "DBReplayBot" | "REPLBot";
      name?: string;
      credentials?: OpenAICredentials;
      path?: string;
      argv?: string[];
    }): Bot {
      switch (params.type) {
        case "ChatGPTBot":
          return new ChatGPTBot(params.name!, params.credentials!);
        case "DummyBot":
          return new DummyBot(params.name!);
        case "DBReplayBot":
          return new DBReplayBot(params.name!);
        case "REPLBot":
          return new REPLBot(params.path!, params.argv!);
        default:
          throw new Error("Invalid bot type");
      }
    }
  }