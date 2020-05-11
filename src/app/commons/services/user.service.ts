import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    console.log(this.url);
  }

  login(params) {
    return this.http.post(`${this.url}/login`, params);
  }

  getAll() {
    return this.http.get(`${this.url}/users`);
  }

  getById(id) {
    return this.http.get(`${this.url}/users/${id}`);
  }

  delete(id) {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  update(id, params) {
    return this.http.put(`${this.url}/users/${id}`, params);
  }

}
