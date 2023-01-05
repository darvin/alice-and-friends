import { Bot } from "./bot";
export class DummyBot extends Bot {
  name;
  constructor(name) {
    super();
    this.name = name;
  }
  async init() {}
  async send(message) {
    const delay = Math.floor(Math.random() * 299);
    await new Promise((resolve) => setTimeout(resolve, delay));
    // if the message is a math expression, try to evaluate it and include the result in the response
    let response = "";
    try {
      const result = eval(message); // eslint-disable-line no-eval
      response += `The result is ${result}. `;
    } catch (e) {
      // the message is not a math expression, do nothing
    }
    // add a smart variation to the message
    const variations = [
      "That's interesting.",
      "I see what you mean.",
      "I never thought of it that way.",
      "Can you elaborate on that?",
      "That's a good point.",
      "I agree.",
      "I disagree.",
      "Could you give an example?",
      "Can you explain that in more detail?",
      "I'm not sure I understand. Could you clarify?",
    ];
    const variation = variations[Math.floor(Math.random() * variations.length)];
    response += `${variation} ${this.name} says: "${message}".`;
    return response;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXlCb3QgY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL2R1bW15Qm90IGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxNQUFNLE9BQU8sUUFBUyxTQUFRLEdBQUc7SUFDVjtJQUFuQixZQUFtQixJQUFZO1FBQzdCLEtBQUssRUFBRSxDQUFDO1FBRFMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUUvQixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksS0FBOEIsQ0FBQztJQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNELGlHQUFpRztRQUNqRyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtZQUM1RCxRQUFRLElBQUksaUJBQWlCLE1BQU0sSUFBSSxDQUFDO1NBQ3pDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixtREFBbUQ7U0FDcEQ7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxVQUFVLEdBQUc7WUFDakIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixpQ0FBaUM7WUFDakMsNEJBQTRCO1lBQzVCLHNCQUFzQjtZQUN0QixVQUFVO1lBQ1YsYUFBYTtZQUNiLDRCQUE0QjtZQUM1QixzQ0FBc0M7WUFDdEMsK0NBQStDO1NBQ2hELENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUUsUUFBUSxJQUFJLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLFdBQVcsT0FBTyxJQUFJLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGIn0=
