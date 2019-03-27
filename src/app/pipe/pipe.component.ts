import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  name:string = "johnSmith"
  mydate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
