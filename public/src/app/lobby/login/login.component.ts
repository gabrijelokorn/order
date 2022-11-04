import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged_user: any;
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

  login_request_function(userdata = { email: String, pwd: String }) {
    this.userService.login_request_service(userdata).subscribe(user => {
      this.logged_user = user;
      this.userService.user.userName = this.logged_user.u_un;
    });
    sessionStorage.setItem("visits", "1");
  }

}
