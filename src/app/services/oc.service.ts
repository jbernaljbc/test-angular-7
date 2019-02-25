import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OcService {

  constructor(private http: HttpClient) { }

  documents() {
    const institution = localStorage.getItem('institution')
    return this.http.get(`http://api-erp.sistemasexpertos.cl:8000/api/v1/document?document_type=1&institution=${institution}`);
  }

  detail(code: string) {
    return this.http.get(`http://api-erp.sistemasexpertos.cl:8000/api/v1/movements?search=${code}`)
  }

}