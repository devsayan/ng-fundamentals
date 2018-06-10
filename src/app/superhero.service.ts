import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  employees : any[] = [{
    id : "16306",
    name : "logan"
  },
  {
    id : "16307",
    name : "deadpool"
  }];
  
  getEmployees(){
    return this.employees;
  }  
 
}
