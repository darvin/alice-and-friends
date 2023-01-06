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
export class DBReplayBot {
    name;
    constructor(name) {
        this.name = name;
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
], DBReplayBot.prototype, "name", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJSZXBsYXlCb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYm90cy9kYlJlcGxheUJvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFHbEQsTUFBTSxPQUFPLFdBQVc7SUFFdkIsSUFBSSxDQUFPO0lBRVYsWUFBWSxJQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDO0lBRUYsS0FBSyxDQUFDLElBQUksS0FBbUIsQ0FBQztJQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDeEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7QUFWQTtJQURFLE1BQU0sRUFBRTs7eUNBQ0MifQ==