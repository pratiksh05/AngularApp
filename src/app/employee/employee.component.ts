import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class employeeComponent implements OnInit {
  public employees=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
this._employeeService.getEmployees()
.subscribe(data=> this.employees=data);
  }

}
