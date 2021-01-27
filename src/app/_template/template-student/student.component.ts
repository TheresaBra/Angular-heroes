import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { Student } from 'src/app/_interface/student';

@Component({
  selector: 'app-template-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  @Input() student$: Student;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }

  ngOnInit(): void {}

  public changeCheck(event?:any):void {
    this.student$.status = ! this.student$.status; 
    const eventObject: EventPing ={
      name:'check',
      object: this.student$
    };
    this.ping.emit(eventObject); 
  }
  public changeName(event?:any):void{
    const eventObject: EventPing ={
      name:'name',
      object: this.student$
    };
    this.ping.emit(eventObject); 
  }
  public deleteStudent(event?:any):void{
    const eventObject: EventPing ={
      name:'delete',
      object: this.student$
    };
    this.ping.emit(eventObject); 
  }
}
