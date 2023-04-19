import { Phase } from "./Phase.type"

export type Event = {
    id: number,
    name: string,
    slug: string,
    startAt: string,
    updatedAt: string,
    state: string,
    numEntrants: number,
    type: number,
    phases: Phase[]
}