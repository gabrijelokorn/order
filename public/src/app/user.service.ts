import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    userName: new String,
  }
  constructor(private httpClient: HttpClient) { }

  login_request_service(userdata = { email: String, password: String }) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.post('http://192.168.13.128:5000/api/auth/login', userdata, { headers: httpHeaders });
  }

  listUsers_request_service() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/listUsers`, { headers: httpHeaders })
  }

  getUser_request_service(userName: String) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/profile?un=${userName}`, { headers: httpHeaders })
  }
}
