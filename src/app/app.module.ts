import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {MyFeatureModuleModule} from './my-feature-module/my-feature-module.module'
import {HttpClientModule} from '@angular/common/http';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routable1Component } from './routable1/routable1.component';
import { Routable2Component } from './routable2/routable2.component';
import {SuperheroService} from './superhero.service'
import { routes } from './routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {JQUERY_TOKEN} from './j-query-wrapper.service'

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
    HttpClientModule,    
    RouterModule.forRoot(routes),
    MyFeatureModuleModule
  ],
  providers: [
    {'provide':SuperheroService, 'useClass' : SuperheroService},
  {"provide": JQUERY_TOKEN, 'useValue': $ }],
  bootstrap: [AppComponent]
})
export class AppModule { }
