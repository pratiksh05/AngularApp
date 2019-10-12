import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{EmployeeData} from '../employee/EmployeeData';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeService{
    private _url:string="../assets/employees.json"
    constructor(private http:HttpClient){}
getEmployees(): Observable<EmployeeData[]>{
    return this.http.get<EmployeeData[]>(this._url);
  

}

}