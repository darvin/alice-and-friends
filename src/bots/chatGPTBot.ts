import { Bot, BotError } from './bot';
import { OpenAICredentials } from '../config/openaiAuth';
import { Expose } from 'class-transformer';

export class ChatGPTBot implements Bot  {
  @Expose()
	name:string
  @Expose()
  credentials: OpenAICredentials;

  constructor(name:string, credentials: OpenAICredentials){
    this.name = name;
    this.credentials = credentials;
  };
  
  async init(): Promise<void> {}
  async send(message: string): Promise<string> {
    return '';
  }
}
