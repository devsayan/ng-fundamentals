import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  //selector: 'app-routable2',
  templateUrl: './routable2.component.html',
  styleUrls: ['./routable2.component.css']
})
export class Routable2Component implements OnInit {

  @Input() idparam : any
  constructor(private route : ActivatedRoute) { }
  ngOnInit() {
    this.idparam = this.route.snapshot.params['id'];
  }

}
