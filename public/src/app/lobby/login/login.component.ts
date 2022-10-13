import { AppComponent } from './../../app.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newUser: any;
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

  loginFun(userdata = { email: String, password: String }) {
    this.userService.loginRequest(userdata).subscribe(user => {
      this.newUser = user;
      this.userService.set_userName(this.newUser.userName);
      
    });
  }
}
