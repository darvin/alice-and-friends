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
export class EchoBot {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
    async init() { }
    async send(message) {
        const delay = Math.floor(Math.random() * 299);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return message;
    }
}
__decorate([
    Expose(),
    __metadata("design:type", String)
], EchoBot.prototype, "name", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNob0JvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL2VjaG9Cb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE1BQU0sT0FBTyxPQUFPO0lBRW5CLElBQUksQ0FBTztJQUVWLFlBQVksSUFBVztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQUEsQ0FBQztJQUdGLEtBQUssQ0FBQyxJQUFJLEtBQW1CLENBQUM7SUFFOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFlO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUzRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7QUFmQTtJQURFLE1BQU0sRUFBRTs7cUNBQ0MifQ==