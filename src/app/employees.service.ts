import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(){

    
    return [
      {id: 1, name:"John", age: 34},
      {id: 2, name:"Smith", age: 44},
      {id: 3, name:"Sam", age: 67},
      {id: 4, name:"Aron", age: 34},
      {id: 5, name:"Chris", age: 76},
    ]

  }



}
