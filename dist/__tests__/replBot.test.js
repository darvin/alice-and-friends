import { REPLBot } from "../bots/replBot";
test("REPL bot runs python interpreter and sends messages to stdin and receives responses from stdout", async () => {
    const bot = new REPLBot("python3", []);
    await bot.init();
    const response1 = await bot.send("print(2 + 2)");
    expect(response1).toBe("4\n");
    const response2 = await bot.send("print('Hello, world!')");
    expect(response2).toBe("Hello, world!\n");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbEJvdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19fdGVzdHNfXy9yZXBsQm90LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLElBQUksQ0FBQyxpR0FBaUcsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNqSCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakIsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFOUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDIn0=