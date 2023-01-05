import { Bot } from "./bot";
import { spawn } from "child_process";
export class REPLBot extends Bot {
    path;
    argv;
    process;
    constructor(path, argv) {
        super();
        this.path = path;
        this.argv = argv;
    }
    async init() {
        try {
            this.process = spawn(this.path, this.argv);
        }
        catch (error) {
            throw new Error(`Error spawning process: ${error.message}`);
        }
    }
    async send(message) {
        if (!this.process) {
            throw new Error("REPLBot process not initialized");
        }
        this.process.stdin.write(`${message}\n`);
        this.process.stdout.once("data", (data) => {
            return data.toString();
        });
        this.process.once("error", (error) => {
            return new BotError();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL3JlcGxCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFrQyxNQUFNLGVBQWUsQ0FBQztBQUV0RSxNQUFNLE9BQU8sT0FBUSxTQUFRLEdBQUc7SUFHWDtJQUFxQjtJQUZoQyxPQUFPLENBQWtDO0lBRWpELFlBQW1CLElBQVksRUFBUyxJQUFjO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVU7SUFFdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSTtZQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YifQ==