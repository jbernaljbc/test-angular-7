import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  me() {
    return this.http.get('http://api-erp.sistemasexpertos.cl:8000/api/v1/users/me');
  }

}