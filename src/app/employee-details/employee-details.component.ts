import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _EmployeesService : EmployeesService) { }
  employees = []

  ngOnInit() {
this.employees = this._EmployeesService.getEmployees()

  }

}
