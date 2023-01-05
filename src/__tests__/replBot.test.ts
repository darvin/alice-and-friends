import { REPLBot } from '../bots/replBot';
test('REPL bot runs python interpreter and sends messages to stdin and receives responses from stdout', async () => {
  const bot = new REPLBot('/usr/bin/python3', ['-u', '-i']);
  await bot.init();

  const response1 = await bot.send('print(2 + 2)');
  expect(response1).toBe('4');

  const response2 = await bot.send("print('Hello, world!')");
  expect(response2).toBe('Hello, world!');
});
