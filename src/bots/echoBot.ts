import { Bot, BotError } from './bot';
import { Expose, Type } from 'class-transformer';

export class EchoBot implements Bot {
  @Expose()
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  async init(): Promise<void> {}

  async send(message: string): Promise<string> {
    const delay = Math.floor(Math.random() * 299);
    await new Promise((resolve) => setTimeout(resolve, delay));

    return message;
  }
}
