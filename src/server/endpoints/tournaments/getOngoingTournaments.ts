import { Request, Response } from "express";
import { GqlStore } from "../../../gqlstore/gql-store";
import { Endpoint } from "../../models/endpoint.type";

const getOngoingTournamentsUrl = '/tournaments/ongoing'

async function getOngoingTournamentsHandler(req: Request, res: Response){
    try { 
        const store = new GqlStore();
        const tournaments = (await store.getOngoingTournaments(100)).filter(tournament => tournament.numAttendees !== 0 ? 1 : 0);

        res.status(200).send(tournaments);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Error');
    }
    
}

export const getOngoingTournaments: Endpoint = {
    handler: getOngoingTournamentsHandler,
    url: getOngoingTournamentsUrl,
    method: 'get'
}