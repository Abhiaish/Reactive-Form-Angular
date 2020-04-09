import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  userForm;
  constructor(){
    this.userForm= new FormGroup({
      
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'addressLine1':new FormControl('',Validators.required),
      'addressLine2':new FormControl('',Validators.required),
      'country':new FormControl('',Validators.required),
      'state':new FormControl('',Validators.required),
      'city':new FormControl('',Validators.required),
      'postalCode':new FormControl('',Validators.required),
    })
  }
      submitData(){
      console.log(this.userForm);
    }
  }

