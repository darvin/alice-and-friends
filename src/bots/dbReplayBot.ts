import { Bot, BotError } from './bot';
import { Expose , Type } from 'class-transformer';


export class DBReplayBot implements Bot  {
  @Expose()
	name:string

  constructor(name:string){
    this.name = name;
  };

  async init(): Promise<void> {}
  async send(message: string): Promise<string> {
    return '';
  }
}
