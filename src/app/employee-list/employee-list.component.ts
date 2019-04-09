import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../employees.service"


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _EmployeesService : EmployeesService) { }

  employees = [];

  ngOnInit() {
   this.employees = this._EmployeesService.getEmployees();
  }

}
