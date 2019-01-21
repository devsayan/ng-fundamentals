import { Component, OnInit } from '@angular/core';
import {NumericPipe} from '../pipes/numeric.pipe';

@Component({
  selector: 'app-customer-routable',
  templateUrl: './customer-routable.component.html',
  styleUrls: ['./customer-routable.component.css']
})
export class CustomerRoutableComponent implements OnInit {

  constructor() { }
  number1 = 1;
  number2 = 2;
  number3 = 3; 
  ngOnInit() {
    
  }
}
