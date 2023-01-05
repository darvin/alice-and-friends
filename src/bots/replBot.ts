class REPLBot extends Bot {
    constructor(public path: string, public argv: string[]) {
      super();
    }
  
    async init(): Promise<void | BotError> {}
    async send(message: string): Promise<string | BotError> {}
}