import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {MyFeatureModuleModule} from './my-feature-module/my-feature-module.module'


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routable1Component } from './routable1/routable1.component';
import { Routable2Component } from './routable2/routable2.component';
import {SuperheroService} from './superhero.service'
import { routes } from './routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EmployeeComponent,
    Routable1Component,
    Routable2Component,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MyFeatureModuleModule
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
