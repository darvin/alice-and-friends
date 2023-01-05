import { OpenAICredentials } from "./openaiAuth";
import { ChatGPTBot } from "./chatGPTBot";
import { DummyBot } from "./dummyBot";
import { DBReplayBot } from "./dbReplayBot";
import { REPLBot } from "./replBot";
import { Bot } from "./bot";

export class BotFactory {

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