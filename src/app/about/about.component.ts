import { Component, OnInit } from '@angular/core';
import{queryAnimation} from "../animations"

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [queryAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }
  items = ['seo', 'ppc', 'smo', 'design']
  removeItem(){
    this.items.pop();
  }
  addItem(){
    this.items.push('Email')

  }
  ngOnInit() {
  }

}
