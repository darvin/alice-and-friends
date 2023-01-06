import { ChatGPTBot } from '../bots/chatGPTBot';
import { DummyBot } from '../bots/dummyBot';
import { DBReplayBot } from '../bots/dbReplayBot';
import { REPLBot } from '../bots/replBot';
import { Bot } from '../bots/bot';
import { plainToClass, plainToInstance } from 'class-transformer';


const botClassMap = { ChatGPTBot, DummyBot, DBReplayBot, REPLBot };

type BotClassName = keyof typeof botClassMap;

export class BotGroup {
  public bots: Bot[];
  constructor(params:{bots: {type: BotClassName, params: any}[]}) {
    this.bots = params.bots.map((botParameters) => {
      return BotGroup.createBot(botParameters.type, botParameters.params);
    });

  }

  static createBot<T extends BotClassName>(name: T, params: any): InstanceType<typeof botClassMap[T]>
  static createBot(name: BotClassName, params: any): InstanceType<typeof botClassMap[BotClassName]> {
    return plainToInstance((botClassMap[name] as any), params) as unknown as InstanceType<typeof botClassMap[BotClassName]>;
  }

}
