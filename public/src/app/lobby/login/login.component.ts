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

  login_request_function(userdata = { email: String, password: String }) {
    this.userService.login_request_service(userdata).subscribe(user => {
      this.newUser = user;
      this.userService.user.userName = this.newUser.u_un;
      
    });
  }
}
