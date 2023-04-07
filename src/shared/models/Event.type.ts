import { Phase } from "./Phase.type"

export type Event = {
    id: number,
    name: string,
    slug: string,
    startAt: string,
    updatedAt: string,
    state: number,
    numEntrants: number,
    videogame: { name: string },
    type: number
}