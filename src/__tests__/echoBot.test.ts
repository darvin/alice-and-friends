import { EchoBot } from "../bots/echoBot";

test("dummy bot responds as expected", async () => {
  const bot = new EchoBot("TestBot");
  await bot.init();

  const response1 = await bot.send("2 + 2");
  expect(response1).toMatch(/2 \+ 2/);

  const response2 = await bot.send("Hello, world!");
  expect(response2).toMatch(/Hello, world/);
});