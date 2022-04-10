
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { TResponse } from '../store/types';


export class HttpService {
    static async request<T = TResponse>(axiosConfig: AxiosRequestConfig): Promise<AxiosResponse<T>> {

        try {

            const response = await axios.request(axiosConfig);
            return response;
        }
        catch (e) {
            throw new Error('Axios error:' + e);
        }
    }


}