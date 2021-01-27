import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './_interface/student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, name: 'Peter Pan', status: false, position:1},
      { id: 2, name: 'Robert Weinss', status: false, position:2 },
      { id: 3, name: 'Birgit Holler', status: false, position:3 },
      { id: 4, name: 'Jesus Garcia', status: false, position:4 },
      { id: 5, name: 'Susanna Banols', status: false, position:5 },
      { id: 6, name: 'Frederico Anderson' , status: false, position:6},
      { id: 7, name: 'Hector Mendez', status: false, position:7 },
      { id: 8, name: 'Maria Lopez', status: false, position:8 },
      { id: 9, name: 'Anabel Heran' , status: false, position:9},
      { id: 10, name: 'Sabine Bauer', status: false, position:10 }
    ];
    return {students};
  }

  
}
