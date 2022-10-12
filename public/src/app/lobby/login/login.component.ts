import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { AuthenticationService } from '../authentication';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  uid: Number | undefined;

  constructor(public authenticationService: AuthenticationService) { 
  }
  
  ngOnInit(): void {
  }

  loginFun(userdata = {email: String, password: String}) {
    this.authenticationService.loginRequest(userdata).subscribe(data => {
      console.log(data);
    });
    
  }
}
