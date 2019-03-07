import { Injectable } from '@angular/core';
import {IEmployee} from './shared/employee.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  
  employees : IEmployee[] = [{
    id : "16306",
    name : "logan"    
  },
  {
    id : "16307",
    name : "deadpool"
  }];
  constructor(private http : HttpClient) { }
  //full response
  /*getEmployees():Observable<HttpResponse<IEmployee[]>>{    
    return this.http.get<IEmployee[]>('http://localhost:3000?rand=' + Math.random(), {'observe': 'response'});
  }*/ 
  //data shortcut
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('http://localhost:3000?rand=' + Math.random());
  }
  getImage():Observable<any>{
    return this.http.get('http://localhost:3000/file?rand=' + Math.random(),  {responseType: 'blob', observe: 'response'});
    
  }
}
