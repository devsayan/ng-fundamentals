import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { IEmployee } from '../shared/employee.model';
import { SuperheroService } from '../superhero.service'
import {JQUERY_TOKEN} from '../j-query-wrapper.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  employees: IEmployee[]
  constructor(private superHeroService: SuperheroService, private el: ElementRef,
  @Inject(JQUERY_TOKEN) private jQuery: any ) { }


  ngOnInit() {
    this.superHeroService.getEmployees().subscribe((data: IEmployee[]) => {
      this.employees = data;
      this.jQuery(this.el.nativeElement).find('h1').addClass('jColor');
    });
    this.superHeroService.getImage().subscribe((data: any) => {
      //let blob = new Blob([data], { type: 'image/jpg' });
      let imgSrc = URL.createObjectURL(data.body);
      this.jQuery(this.el.nativeElement).find("img").attr("src", imgSrc);
      console.log("success");
    },(error:any) => {
      console.log(error);
    }, () => {
      console.log("completed");
    });
  }

  handleClick() {

    console.log("button clicked");
    this.childData.emit("foo");
  }
  publicMethod() {
    console.log("child method called from parent");
  }
  publicprop: any = "val"
  @Input() pData: any;
  @Output() childData = new EventEmitter();
}
