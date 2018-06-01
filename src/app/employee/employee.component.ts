import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }  
  ngOnInit() {
  }
  getLoganClass(){
    var retVal = (this.employee && this.employee.id === "16306") ? ['yellow'] : [];
    return retVal;
  }
  @Input() employee : any     
}
