import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators  } from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

   userform = new FormGroup({
      name : new FormControl(null, [Validators.required, Validators.minLength(4) ] ),
      email:  new FormControl(),
      address: new FormGroup({
        street : new FormControl(),
        city : new FormControl(),
        postalcode : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$')]),
      })
   })

   formData : any

   onSubmit(){
      this.formData= this.userform.value
   }
  constructor() { }

  ngOnInit() {
  }

}
