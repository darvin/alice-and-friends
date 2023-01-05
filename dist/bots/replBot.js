import { Bot } from "./bot";
export class REPLBot extends Bot {
    path;
    argv;
    constructor(path, argv) {
        super();
        this.path = path;
        this.argv = argv;
    }
    async init() { }
    async send(message) {
        return "";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL3JlcGxCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUV0QyxNQUFNLE9BQU8sT0FBUSxTQUFRLEdBQUc7SUFDVDtJQUFxQjtJQUF4QyxZQUFtQixJQUFZLEVBQVMsSUFBYztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQURTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFVO0lBRXRELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxLQUE4QixDQUFDO0lBQ3pDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FDSiJ9