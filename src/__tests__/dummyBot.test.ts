import { DummyBot } from "../bots/dummyBot";

test("dummy bot responds as expected", async () => {
  const bot = new DummyBot("TestBot");
  await bot.init();

  const response1 = await bot.send("2 + 2");
  expect(response1).toMatch(/The result is 4/);
  expect(response1).toMatch(/TestBot says: "2 \+ 2"/);

  const response2 = await bot.send("Hello, world!");
  expect(response2).toMatch(/TestBot says: "Hello, world!"/);
});
