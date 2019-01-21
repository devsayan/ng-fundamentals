import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerRoutableComponent} from './customer-routable/customer-routable.component'
//import {NumericPipe} from './pipes/numeric.pipe'

const routes: Routes = [
  {
    path : '',
    component : CustomerRoutableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //declarations: [NumericPipe],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
