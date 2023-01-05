import { ChatGPTBot } from "./chatGPTBot";
import { DummyBot } from "./dummyBot";
import { DBReplayBot } from "./dbReplayBot";
import { REPLBot } from "./replBot";
export class BotFactory {
    static create(params) {
        switch (params.type) {
            case "ChatGPTBot":
                return new ChatGPTBot(params.name, params.credentials);
            case "DummyBot":
                return new DummyBot(params.name);
            case "DBReplayBot":
                return new DBReplayBot(params.name);
            case "REPLBot":
                return new REPLBot(params.path, params.argv);
            default:
                throw new Error("Invalid bot type");
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3RzL2JvdEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdwQyxNQUFNLE9BQU8sVUFBVTtJQUVuQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BTVg7UUFDQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbkIsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUssRUFBRSxNQUFNLENBQUMsV0FBWSxDQUFDLENBQUM7WUFDM0QsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQyxDQUFDO1lBQ3BDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDdkMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUssRUFBRSxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDakQ7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztDQUNOIn0=