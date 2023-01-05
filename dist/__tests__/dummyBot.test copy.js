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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXlCb3QudGVzdCBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19fdGVzdHNfXy9kdW1teUJvdC50ZXN0IGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVqQixNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUVwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDIn0=