import { Component, OnInit } from '@angular/core';
import {colors, chartColor} from '../appcolors/mycolors';


  
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  ///providers : [ colors]
})
export class HomeComponent implements OnInit {

  blueColor = this.color.pink;
  redChartColor = this.chartColor.red;

  constructor( private color: colors, private chartColor: chartColor  ) { }

  ngOnInit() {


  }

}
