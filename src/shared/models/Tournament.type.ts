import { Image } from './Image.type'
export type Tournament = {
    id: number,
    name: string,
    slug: string,
    isOnline: boolean,
    city?: string,
    addrState?: string,
    countryCode?: string,
    startAt: string,
    endAt: string,
    images?: Image[]
}