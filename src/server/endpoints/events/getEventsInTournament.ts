import { Request, Response } from "express";
import { GqlStore } from "../../../gqlstore/gql-store";
import { Endpoint } from "../../models/endpoint.type";

const getEventsInTournamentUrl = '/events/:tournamentId'

async function getEventsInTournamentHandler(req: Request, res: Response){
    try { 
        const store = new GqlStore();
        const tournamentId = req.params.tournamentId;
        const events = await store.getEventsInTournament(tournamentId);

        res.status(200).send(events);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Error');
    }
    
}

export const getEventsInTournament: Endpoint = {
    handler: getEventsInTournamentHandler,
    url: getEventsInTournamentUrl,
    method: 'get'
}