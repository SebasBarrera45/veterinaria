import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost/proyectoAbierto-service/controller/';
  usd = 0;

  constructor(private http: HttpClient) { }

  get(model: string, action: string) {
    return this.http.get(`${this.baseUrl}${model}.php?option=${action}`);
  }

  post(model: string, action: string, datos: any) {
    return this.http.post(`${this.baseUrl}${model}.php?option=${action}`, datos);
  }
}
