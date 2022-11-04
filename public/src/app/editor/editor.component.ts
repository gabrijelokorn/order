import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  add_person_request_function(personData = {fn: String, ln: String, bdd: Date, sex: String} ){
    this.peopleService.add_person_request_service(personData).subscribe(data => {
      console.log(data);
      
    });
  }

  remove_person_request_function () {
    this.peopleService.remove_person_request_service(1).subscribe(data => {
      console.log(data);
      
    });
  }
}
