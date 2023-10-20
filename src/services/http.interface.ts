export interface IHttp {
  get<ResponseType>(url: string, params?: string): Promise<ResponseType>
  post<ResponseType, BodyType>(url: string, body: BodyType): Promise<ResponseType>
  delete<ResponseType>(url: string, id: string): Promise<ResponseType>
}