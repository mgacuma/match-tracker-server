import { Tournament } from "../shared/models/Tournament.type";
import { GqlClient } from "./client/gql-client";
import { GqlQueries } from "./queries/gql-queries.enum";

export interface IGqlStore {
    getOngoingTournaments(): Promise<Tournament[]>
    getUpcomingTournaments(): Promise<Tournament[]>
    getEventsInTournament(id: string): Promise<any>;
    
}

export class GqlStore implements IGqlStore {
    private gqlClient;

    constructor(){
        this.gqlClient = new GqlClient();
    }
    
    async getOngoingTournaments(): Promise<Tournament[]> {
        const query = GqlQueries.getOngoingTournaments;
        const variables = { perPage: 10 }
        
        const response = await this.gqlClient.sendQuery({ query, variables });

        if(response.data){
            return response.data.tournaments.nodes as Tournament[];
        }
        
        return [];
    }

    async getUpcomingTournaments(){
        const query = GqlQueries.getUpcomingTournaments;
        const variables = { perPage: 10 }
        
        const response = await this.gqlClient.sendQuery({ query, variables });

        if(response.data){
            return response.data.tournaments.nodes as Tournament[];
        }
        
        return [];
    }

    async getEventsInTournament(id:string){
        const query = GqlQueries.getEventsInTournament;
        const variables = { tournamentId: id }
        
        const response = await this.gqlClient.sendQuery({ query, variables });

        if(response.data){
            return response.data.tournament.events
        }
        
        return [];
    }
    
}