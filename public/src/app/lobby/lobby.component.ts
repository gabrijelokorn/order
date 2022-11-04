import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  logout_request_function() {
    this.userService.logout_request_service().subscribe();
    sessionStorage.clear();
  }

}
