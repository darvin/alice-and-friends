import { REPLBot } from "../bots/replBot";
test("REPL bot runs python interpreter and sends messages to stdin and receives responses from stdout", async () => {
    const bot = new REPLBot("/usr/bin/python3", ["-u", "-i"]);
    await bot.init();
    const response1 = await bot.send("print(2 + 2)");
    expect(response1).toBe("4");
    const response2 = await bot.send("print('Hello, world!')");
    expect(response2).toBe("Hello, world!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbEJvdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19fdGVzdHNfXy9yZXBsQm90LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLElBQUksQ0FBQyxpR0FBaUcsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNqSCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWpCLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVCLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQUMifQ==