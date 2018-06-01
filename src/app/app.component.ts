import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  handleChildButtonClicked($event){
    console.log(JSON.stringify($event));
  }
  parentData = {
    name : "sayan",
    empId  : 16306
  }  
}
