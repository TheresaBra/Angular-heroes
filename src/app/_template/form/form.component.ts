import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/_interface/student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  public student$: Student; 
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.student$ = {
      id: undefined,
      name: "",
      status: false,
      position: undefined
    };
   }

  ngOnInit(): void {
  }
  public createStudent(event?:any):void{
    this.ping.emit(this.student$);
    this.student$ = {
      id: undefined,
      name: "",
      status: false,
      position: undefined
    };   
  }

}
