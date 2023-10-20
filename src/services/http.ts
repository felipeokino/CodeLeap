import axios from 'axios';
import { IHttp } from './http.interface';
import { API_URL } from '../utils/contants';

axios.defaults.baseURL = API_URL;
export class Http implements IHttp {
  get<ResponseType>(url: string, params?: string | undefined): Promise<ResponseType> {
    throw new Error('Method not implemented.');
  }
  post<ResponseType, BodyType>(url: string, body: BodyType): Promise<ResponseType> {
    throw new Error('Method not implemented.');
  }
  delete<ResponseType>(url: string, id: string): Promise<ResponseType> {
    throw new Error('Method not implemented.');
  }
}