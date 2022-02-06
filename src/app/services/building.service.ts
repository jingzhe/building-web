import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Building } from '../models/building.model';

const baseUrl = 'http://localhost:8081/buildings';
const authBaseUrl = 'http://localhost:8082/authentication';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  user = {
    'user_name': '"user',
    'password': '123456'
  };

  headers: any = {};

  constructor(private http: HttpClient, private authHttp: HttpClient) {
    this.authHttp.post(authBaseUrl, this.user)
      .subscribe((res: any) => this.headers = { 'Authorization': 'Bearer ' + res.access_token })
  }

  getAll(): Observable<Building[]> {
    return this.http.get<Building[]>(baseUrl, { headers: this.headers });
  }

  get(id: any): Observable<Building> {
    return this.http.get(`${baseUrl}/${id}`, { headers: this.headers });
  }

  create(data: any): Observable<any> {
    console.log(data)
    return this.http.post(baseUrl, data, { headers: this.headers });
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, { headers: this.headers });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { headers: this.headers });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Building[]> {
    return this.http.get<Building[]>(`${baseUrl}?name=${name}`);
  }
}
