import { Request, Response } from "express";
import { GqlStore } from "../../../gqlstore/gql-store";
import { Endpoint } from "../../models/endpoint.type";

const getUpcomingTournamentsUrl = '/tournaments/upcoming'

async function getUpcomingTournamentsHandler(req: Request, res: Response){
    try { 
        const store = new GqlStore();
        const tournaments = await store.getUpcomingTournaments();

        res.status(200).send(tournaments);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Error');
    }
    
}

export const getUpcomingTournaments: Endpoint = {
    handler: getUpcomingTournamentsHandler,
    url: getUpcomingTournamentsUrl,
    method: 'get'
}