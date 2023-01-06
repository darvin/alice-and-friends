var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
export class DummyBot {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
    async init() { }
    async send(message) {
        const delay = Math.floor(Math.random() * 299);
        await new Promise((resolve) => setTimeout(resolve, delay));
        // if the message is a math expression, try to evaluate it and include the result in the response
        let response = '';
        try {
            const result = eval(message); // eslint-disable-line no-eval
            response += `The result is ${result}. `;
        }
        catch (e) {
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
__decorate([
    Expose(),
    __metadata("design:type", String)
], DummyBot.prototype, "name", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXlCb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYm90cy9kdW1teUJvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFHbEQsTUFBTSxPQUFPLFFBQVE7SUFFcEIsSUFBSSxDQUFPO0lBRVYsWUFBWSxJQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDO0lBRUYsS0FBSyxDQUFDLElBQUksS0FBbUIsQ0FBQztJQUU5QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNELGlHQUFpRztRQUNqRyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtZQUM1RCxRQUFRLElBQUksaUJBQWlCLE1BQU0sSUFBSSxDQUFDO1NBQ3pDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixtREFBbUQ7U0FDcEQ7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxVQUFVLEdBQUc7WUFDakIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixpQ0FBaUM7WUFDakMsNEJBQTRCO1lBQzVCLHNCQUFzQjtZQUN0QixVQUFVO1lBQ1YsYUFBYTtZQUNiLDRCQUE0QjtZQUM1QixzQ0FBc0M7WUFDdEMsK0NBQStDO1NBQ2hELENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUUsUUFBUSxJQUFJLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLFdBQVcsT0FBTyxJQUFJLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdENBO0lBREUsTUFBTSxFQUFFOztzQ0FDQyJ9