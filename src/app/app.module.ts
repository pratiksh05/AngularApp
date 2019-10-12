import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.component';
import { FooterComponent } from './footer/footer.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService}  from './services/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    FooterComponent,
    RadiobuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
