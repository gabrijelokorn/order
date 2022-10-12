import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  loginRequest(userdata = { email: String, password: String }) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.post('http://192.168.13.128:5000/api/auth/login', userdata, { headers: httpHeaders });
  }
}
