import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { AppConfig } from '../config/appConfig';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    console.log(this.url);
  }

  getAll() {
    return this.http.get(`${this.url}/posts`);
  }

  getById(id) {
    return this.http.get(`${this.url}/posts/${id}`);
  }

  delete(id) {
    return this.http.delete(`${this.url}/posts/${id}`);
  }

  add(params) {
    return this.http.post(`${this.url}/posts`, params);
  }
  update(id, params) {
    return this.http.put(`${this.url}/posts/${id}`, params);
  }

}
