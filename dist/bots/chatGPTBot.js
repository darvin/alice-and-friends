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
export class ChatGPTBot {
    name;
    credentials;
    constructor(name, credentials) {
        this.name = name;
        this.credentials = credentials;
    }
    ;
    async init() { }
    async send(message) {
        return '';
    }
}
__decorate([
    Expose(),
    __metadata("design:type", String)
], ChatGPTBot.prototype, "name", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ChatGPTBot.prototype, "credentials", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdEdQVEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL2NoYXRHUFRCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxVQUFVO0lBRXRCLElBQUksQ0FBTztJQUVWLFdBQVcsQ0FBb0I7SUFFL0IsWUFBWSxJQUFXLEVBQUUsV0FBOEI7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRixLQUFLLENBQUMsSUFBSSxLQUFtQixDQUFDO0lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjtBQWJBO0lBREUsTUFBTSxFQUFFOzt3Q0FDQztBQUVWO0lBREMsTUFBTSxFQUFFOzsrQ0FDc0IifQ==