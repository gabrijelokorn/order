import { UserService } from './../user.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(public userService: UserService) { }
  rows: any;

  ngOnInit(): void {
    this.userService.listUsers_request_service().subscribe((data) => {
      this.rows = data
    });
  }

}
