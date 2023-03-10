var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SubProcess } from 'teen_process';
import { Expose } from 'class-transformer';
export class REPLBot {
    name;
    path;
    argv;
    constructor(name, path, argv) {
        this.name = name;
        this.path = path;
        this.argv = argv;
    }
    process;
    async init() {
        try {
            this.process = new SubProcess(this.path, this.argv);
        }
        catch (error) {
            throw new Error(`Error spawning process: ${error.message}`);
        }
        await this.process.start((stdout, stderr) => {
            if (stdout || stderr)
                return true;
            return false;
        });
        this.process.on('exit', (code, signal) => {
            // if we get here, all we know is that the proc exited
            console.log(`exited with code ${code} from signal ${signal}`);
            // exited with code 127 from signal SIGHUP
        });
        this.process.on('stop', (code, signal) => {
            // if we get here, we know that we intentionally stopped the proc
            // by calling proc.stop
            console.log(`stopped with code ${code} from signal ${signal}`);
        });
        this.process.on('end', (code, signal) => {
            // if we get here, we know that the process stopped outside of our control
            // but with a 0 exit code
            console.log(`ended with code ${code} from signal ${signal}`);
        });
        this.process.on('die', (code, signal) => {
            // if we get here, we know that the process stopped outside of our control
            // with a non-zero exit code
            console.log(`died with code ${code} from signal ${signal}`);
        });
        //this.process.on('output', (stdout:string, stderr:string) => {
        //  console.log(`stdout: ${stdout}`);
        //  console.log(`stderr: ${stderr}`);
        //});
    }
    async send(message) {
        if (!this.process) {
            throw new Error('REPLBot process not initialized');
        }
        return new Promise((resolve, reject) => {
            this.process.proc.stdin.write(`${message}\n`);
            this.process.on('lines-stdout', (lines) => {
                resolve(lines.join('\n'));
            });
        });
    }
}
__decorate([
    Expose(),
    __metadata("design:type", String)
], REPLBot.prototype, "name", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], REPLBot.prototype, "path", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Array)
], REPLBot.prototype, "argv", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL3JlcGxCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsTUFBTSxPQUFPLE9BQU87SUFFbkIsSUFBSSxDQUFPO0lBRVYsSUFBSSxDQUFPO0lBRVosSUFBSSxDQUFVO0lBRWIsWUFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQWM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVPLE9BQU8sQ0FBYztJQUU3QixLQUFLLENBQUMsSUFBSTtRQUNSLElBQUk7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUNELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxNQUFNLElBQUksTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUNsQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQ3ZELHNEQUFzRDtZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixJQUFJLGdCQUFnQixNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlELDBDQUEwQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUN2RCxpRUFBaUU7WUFDakUsdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksZ0JBQWdCLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDdEQsMEVBQTBFO1lBQzFFLHlCQUF5QjtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLGdCQUFnQixNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQ3RELDBFQUEwRTtZQUMxRSw0QkFBNEI7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxnQkFBZ0IsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVILCtEQUErRDtRQUMvRCxxQ0FBcUM7UUFDckMscUNBQXFDO1FBQ3JDLEtBQUs7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQyxJQUFLLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBZSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWxFQTtJQURFLE1BQU0sRUFBRTs7cUNBQ0M7QUFFVjtJQURDLE1BQU0sRUFBRTs7cUNBQ0U7QUFFWjtJQURFLE1BQU0sRUFBRTs7cUNBQ0kifQ==