import { Injectable } from '@angular/core';
import { Student } from './_interface/student';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'api/students';  // URL to web api
  constructor(private http: HttpClient) { }

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
  }



}
