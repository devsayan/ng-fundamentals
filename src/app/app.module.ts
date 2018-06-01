import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routable1Component } from './routable1/routable1.component';
import { Routable2Component } from './routable2/routable2.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EmployeeComponent,
    Routable1Component,
    Routable2Component    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }