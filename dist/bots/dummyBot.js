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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXlCb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYm90cy9kdW1teUJvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFZLE1BQU0sT0FBTyxDQUFDO0FBQ3RDLE1BQU0sT0FBTyxRQUFTLFNBQVEsR0FBRztJQUNaO0lBQW5CLFlBQW1CLElBQVk7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFEUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBRS9CLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxLQUFtQixDQUFDO0lBRTlCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFM0QsaUdBQWlHO1FBQ2pHLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEJBQThCO1lBQzVELFFBQVEsSUFBSSxpQkFBaUIsTUFBTSxJQUFJLENBQUM7U0FDekM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLG1EQUFtRDtTQUNwRDtRQUVELHVDQUF1QztRQUN2QyxNQUFNLFVBQVUsR0FBRztZQUNqQixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLGlDQUFpQztZQUNqQyw0QkFBNEI7WUFDNUIsc0JBQXNCO1lBQ3RCLFVBQVU7WUFDVixhQUFhO1lBQ2IsNEJBQTRCO1lBQzVCLHNDQUFzQztZQUN0QywrQ0FBK0M7U0FDaEQsQ0FBQztRQUNGLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RSxRQUFRLElBQUksR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksV0FBVyxPQUFPLElBQUksQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0YifQ==
