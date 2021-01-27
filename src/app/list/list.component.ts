import { Component, OnInit } from '@angular/core';
import { Student } from '../_interface/student';
import { EventPing } from '../_interface/eventping';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  $students:Student[]; 

  public studentShow: boolean; 
  public studentPresentShow: boolean; 
  public $studentsPresent: Student[];

  constructor(private studentService:StudentService) {
    this.studentShow = true; 
    this.studentPresentShow = true; 
    this.$students = [],
    this.$studentsPresent = []
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe($students => this.$students = $students);
  }

  public create (event: Student):void {
    event.position = this.$students.length + 1;
    this.$students.push(event); 
  }

  public update(event:EventPing):void {
    if ('check' === event.name){
      if (!event.object.status){
        this.$studentsPresent.splice(this.$studentsPresent.indexOf(event.object),1);
        this.$students.push(event.object);
      }else{
        this.$students.splice(this.$students.indexOf(event.object),1);
        this.$studentsPresent.push(event.object); 
      }
    }
    if ('delete' === event.name){
      if (event.object.status){
        this.$studentsPresent.splice(this.$studentsPresent.indexOf(event.object),1);
      }else{
        this.$students.splice(this.$students.indexOf(event.object),1);
      }
    }
    if ('name' === event.name){
      if (event.object.status){
        this.$studentsPresent.forEach((student:Student)=>{
          if (student.id===event.object.id) {
            student.name = event.object.name;
          }
        });
      }else{
        this.$students.forEach((student:Student)=>{
          if (student.id===event.object.id) {
            student.name = event.object.name;
          }
        });
      }
    }
  }
}
