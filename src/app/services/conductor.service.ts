import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conductor } from '../models/conductor';

const baseUrl = 'http://localhost:8080/api/v1/drivers';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Conductor[]> {
    return this.http.get<Conductor[]>(baseUrl);
  }

  get(id:number):Observable<Conductor> {
    return this.http.get<Conductor>(`${baseUrl}/${id}`);
  }

  create(data:any):Observable<any> {
    return this.http.post(baseUrl, data)
  }

  update(id:number,data:any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:number):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll():Observable<any> {
    return this.http.delete(baseUrl)
  }
}