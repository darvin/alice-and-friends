class DummyBot extends Bot {
    constructor(public name: string) {
      super();
    }
  
    async init(): Promise<void | BotError> {}
    async send(message: string): Promise<string | BotError> {}
  }