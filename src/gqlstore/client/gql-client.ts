import axios, { AxiosInstance } from 'axios'
import dotenv from 'dotenv';
import { Query } from '../models/Query.type';
dotenv.config();


export interface IGqlClient {
    sendQuery({query, variables, opName}: Query): Promise<any>;
}

export class GqlClient implements IGqlClient {
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: process.env.GQL_URL,
            timeout: 5000,
            headers: {
                Authorization: `Bearer ${process.env.GQL_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }

    async sendQuery({ query, variables, operationName }){
        const { data } = await this.axiosInstance.post('', JSON.stringify({
            query: query,
            variables: variables,
            operationName: operationName
        }))
        
        return data;
    }
    
}