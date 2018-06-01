import { Injectable } from '@angular/core';

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
  constructor() { }
  getEmployees(){
    return this.employees;
  }
}
