import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

type CreateClientParams = {
    token: string;
};

@Injectable()
export class HttpClientService {
    /**
     * @method createClient - Create custom AxiosInstance
     * @param {CreateClientParams} params - Params of the instance
     * @returns
     */
    createClient(params?: CreateClientParams): AxiosInstance {
        const httpClient = axios.create({
            headers: params?.token
                ? { Authorization: `Bot ${params.token}` }
                : {},
        });

        return httpClient;
    }
}
