import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  httpHeaders = new HttpHeaders().append('content-type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  add_person_request_service (personData = {fn: String, ln: String, bdd: Date, sex: String}) {
    return this.httpClient.post(`http://192.168.13.128:5000/api/people/add`, personData, { headers: this.httpHeaders});
  }

  remove_person_request_service (pid: Number) {
    return this.httpClient.get(`http://192.168.13.128:5000/api/people/remove?pid=${pid}`, { headers: this.httpHeaders});
  }
}
