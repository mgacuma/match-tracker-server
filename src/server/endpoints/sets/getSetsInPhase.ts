import { Request, Response } from "express";
import { GqlStore } from "../../../gqlstore/gql-store";
import { Endpoint } from "../../models/endpoint.type";

const getSetsInPhaseUrl = '/sets/:phaseId'

async function getSetsInPhaseHandler(req: Request, res: Response){
    try { 
        const store = new GqlStore();
        const phaseId = req.params.phaseId;
        const sets = await store.getSetsInPhase(phaseId);

        res.status(200).send(sets);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Error');
    }
    
}

export const getSetsInPhase: Endpoint = {
    handler: getSetsInPhaseHandler,
    url: getSetsInPhaseUrl,
    method: 'get'
}