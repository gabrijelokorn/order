import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders = new HttpHeaders().append('content-type', 'application/json');
  user = {
    userName: new String,
  }
  constructor(private httpClient: HttpClient) { 
  }
  
  login_request_service(userdata = { email: String, password: String }) {
    return this.httpClient.post('http://192.168.13.128:5000/api/auth/login', userdata, { headers: this.httpHeaders });
  }

  listUsers_request_service() {
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/listUsers`, { headers: this.httpHeaders })
  }

  getUser_request_service(userName: String) {
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/profile?un=${userName}`, { headers: this.httpHeaders })
  }
}
