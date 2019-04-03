import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitFormData : any

  getData(data){
    console.log(data)
  }

  onSubmit(FormData){
   this.submitFormData = FormData
   //console.log(FormData)
  }

  constructor() { }
 
  ngOnInit() {
  }

}
