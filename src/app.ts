import { Server } from "./server/server";
import dotenv from 'dotenv'
import { GqlStore } from "./gqlstore/gql-store";
dotenv.config();

class App {
    private server: Server;

    constructor(){
        this.server = new Server(process.env.PORT);
        const store = new GqlStore();
        // store.getUpcomingTournaments().then(data => console.log(data))
        
    }
}

const app = new App();
