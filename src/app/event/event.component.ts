import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SuperheroService} from '../superhero.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  employees : any[]
  constructor(private superHeroService : SuperheroService) { }

  ngOnInit() {
    this.employees = this.superHeroService.getEmployees();
  }
 
  handleClick(){
    console.log("button clicked");
    this.childData.emit("foo");
  }
  publicMethod(){
    console.log("child method called from parent");
    this.childData.emit({"name" : "sayan"});
  }
  publicprop :any = "val"
  @Input() parentData : any;
  @Output() childData =  new EventEmitter();  
}
