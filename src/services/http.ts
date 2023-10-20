import axios from 'axios';
import { IHttp } from './http.interface';
import { API_URL } from '../utils/contants';

axios.defaults.baseURL = API_URL;
export class Http implements IHttp {
  patch<ResponseType, BodyType>(url: string, id: string, body: BodyType): Promise<ResponseType> {
    return axios.patch(`${url}/${id}/`, body);
  }
  get<ResponseType>(url: string, params?: string | undefined): Promise<ResponseType> {
    return axios.get(url)
  }
  post<ResponseType, BodyType>(url: string, body: BodyType): Promise<ResponseType> {
    return axios.post(url, body);
  }
  delete<ResponseType>(url: string, id: string): Promise<ResponseType> {
    return axios.delete(`${url}/${id}/`)
  }
}