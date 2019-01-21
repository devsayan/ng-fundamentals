import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerRoutableComponent } from './customer-routable/customer-routable.component';
import {NumericPipe} from './pipes/numeric.pipe'

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerRoutableComponent, NumericPipe]
})
export class CustomersModule { }
