import { Endpoint } from "../models/endpoint.type";
import { getEventsInTournament } from "./events/getEventsInTournament";
import { getOngoingTournaments } from "./tournaments/getOngoingTournaments";
import { getUpcomingTournaments } from "./tournaments/getUpcomingTopTournaments";

export const endpoints: Endpoint[] = [
    getUpcomingTournaments,
    getOngoingTournaments,
    getEventsInTournament
]