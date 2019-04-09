import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  userform: FormGroup;

  constructor(private formBuilder : FormBuilder  ) { }
  
  ngOnInit() {

    this.userform = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4)] ],
      email : [],
      address: this.formBuilder.group({
        street:[],
        city:[],
        postalcode:[null,  Validators.pattern('^[0-9]{5}$')]
      }),
  
    })
    
  }
  formData : any
  /*
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null,  Validators.pattern('^[0-9]$')),
  
    }),
  });
  */
  
  
  onSubmit(){
    this.formData = this.userform.value
  }
  
 
}
