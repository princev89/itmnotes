import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectsubject',
  templateUrl: './selectsubject.component.html',
  styleUrls: ['./selectsubject.component.css']
})
export class SelectsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
subjects = [
       {id: 1, name: "Computer Networks"},
       {id: 2, name: "Software Engineering"},
       {id: 3, name: "Web Technology"},
       {id: 4, name: "Real Time System"},
       
     ];
    selectedValue = null;
    setnull(){
      this.selectedValue = null;
    }
}