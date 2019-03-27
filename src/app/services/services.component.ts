import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  
  
  value : string
  howAreYou()
  {
    this.value = "I am fine."
    
  }
  whatIsYourName()
  {
    this.value = "My name is John"
    
  }


 
  userName : string 
  userAge : number 
  status : boolean = false

  toggle : boolean = false

  userData(getUserName : string, getUserAge : number  ){
    this.userName = getUserName;
    this.userAge = getUserAge;
    this.status = true

  }

  clickMe()
  {
    this.toggle = !this.toggle
  }

  getKeyValue = " "
  keyUp(value:string)
  {
    this.getKeyValue += value + ' | '
  }
  getKeyEnterValue = " "
  keyEnter(value:string)
  {
    this.getKeyEnterValue = value;
  }

  ngOnInit() {

    
  }

}
