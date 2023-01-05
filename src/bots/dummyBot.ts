import { Bot, BotError } from './bot';
export class DummyBot extends Bot {
  constructor(public name: string) {
    super();
  }

  async init(): Promise<void> {}

  async send(message: string): Promise<string> {
    const delay = Math.floor(Math.random() * 299);
    await new Promise((resolve) => setTimeout(resolve, delay));

    // if the message is a math expression, try to evaluate it and include the result in the response
    let response = '';
    try {
      const result = eval(message); // eslint-disable-line no-eval
      response += `The result is ${result}. `;
    } catch (e) {
      // the message is not a math expression, do nothing
    }

    // add a smart variation to the message
    const variations = [
      "That's interesting.",
      'I see what you mean.',
      'I never thought of it that way.',
      'Can you elaborate on that?',
      "That's a good point.",
      'I agree.',
      'I disagree.',
      'Could you give an example?',
      'Can you explain that in more detail?',
      "I'm not sure I understand. Could you clarify?",
    ];
    const variation = variations[Math.floor(Math.random() * variations.length)];
    response += `${variation} ${this.name} says: "${message}".`;
    return response;
  }
}
