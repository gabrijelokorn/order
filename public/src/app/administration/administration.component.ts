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
    this.userService.listUsersRequest().subscribe((data) => {
      console.log(data);
      this.rows = data
    });
  }

}
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value: { [x: string]: any; }, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
