import { Injectable } from '@angular/core';
import { Ruta } from '../models/ruta';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/routes'

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private http:HttpClient) {
   }

   getAll():Observable<Ruta[]> {
    return this.http.get<Ruta[]>(baseUrl);
   }

   get(id:number):Observable<Ruta> {
    return this.http.get<Ruta>(`${baseUrl}/${id}`);
   }

   create(data:any):Observable<any> {
    return this.http.post(baseUrl, data);
   }

   update(id:number,data:any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
   }

   delete(id:number):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
   }

   deleteAll():Observable<any> {
    return this.http.delete(baseUrl)
   }

}