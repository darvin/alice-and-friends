import { ChatGPTBot, DummyBot, DBReplayBot, REPLBot } from '../bots';
import { OpenAICredentials } from '../config';
import { BotGroup } from '../session';

describe('BotGroup', () => {
  it('should create an instance of the correct bot class based on the type parameter', () => {
    const openaiAuth:OpenAICredentials = {
      login: "sample@login",
      password:"samplePass"
    }
    const replPath = "/usr/bin/python44";
    const botGroup = new BotGroup({
      bots: [
        { type: 'ChatGPTBot', params: {name: "A", credentials: openaiAuth} },
        { type: 'DummyBot', params: {name: "B", } },
        { type: 'DBReplayBot', params: {name: "C", } },
        { type: 'REPLBot', params: {name: "D", path: replPath, argv: []} },
      ],
    });

    expect(botGroup.bots[0]).toBeInstanceOf(ChatGPTBot);
    let chatGPTBot = botGroup.bots[0] as ChatGPTBot;
    expect(chatGPTBot.credentials.login).toBe(openaiAuth.login);
    expect(chatGPTBot.credentials.password).toBe(openaiAuth.password);
    expect(botGroup.bots[1]).toBeInstanceOf(DummyBot);
    expect(botGroup.bots[2]).toBeInstanceOf(DBReplayBot);
    expect(botGroup.bots[3]).toBeInstanceOf(REPLBot);
    let replGPTBot = botGroup.bots[3] as REPLBot;
    expect(replGPTBot.path).toBe(replPath);


  });
});
