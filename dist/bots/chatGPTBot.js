import { Bot } from "./bot";
export class ChatGPTBot extends Bot {
    name;
    credentials;
    constructor(name, credentials) {
        super();
        this.name = name;
        this.credentials = credentials;
    }
    async init() { }
    async send(message) {
        return "";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdEdQVEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL2NoYXRHUFRCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUV0QyxNQUFNLE9BQU8sVUFBVyxTQUFRLEdBQUc7SUFDZDtJQUFxQjtJQUF4QyxZQUFtQixJQUFZLEVBQVMsV0FBOEI7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBRXRFLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxLQUFtQixDQUFDO0lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRiJ9