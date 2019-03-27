import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'Designers';
  value : any = 23

  customers = [
    {
      name : "Sandesh",
      lastName : "Garate"
    },
    {
      name : "Vikas",
      lastName : "Hiray"
    }

  ];


}

