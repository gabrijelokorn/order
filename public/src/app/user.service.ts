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

  loginRequest(userdata = { email: String, password: String }) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.httpClient.post('http://192.168.13.128:5000/api/auth/login', userdata, { headers: httpHeaders });
  }

  set_userName(newName: String) {
    this.user.userName = newName;
  }

  get_userName() {
    return this.user.userName;
  }

  listUsersRequest() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/listUsers`, { headers: httpHeaders })
  }

  getUserRequest(userName: String) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`http://192.168.13.128:5000/api/users/profile?userName=${userName}`, { headers: httpHeaders })
  }
}
