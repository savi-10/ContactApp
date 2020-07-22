import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  changedPhoneNumber: string;
  showDetails=false;
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  // phonePattern=/^(\d{3}\-)?(\(\d{3}\))?\d{3}\-\d{4}$/;

  constructor(private formBuilder: FormBuilder) {

   this.registerForm = this.formBuilder.group({
    'firstName': [this.user.firstName, [
      Validators.required
    ]],
    'lastName': [this.user.lastName, [
      Validators.required
    ]],
    'email': [this.user.email, [
      Validators.required,
      Validators.email
    ]],
    'phoneNumber': [this.user.phoneNumber, [
      Validators.required,
        Validators.maxLength(15),
        Validators.minLength(15)
        // Validators.pattern(this.phonePattern)
    ]]
  });
}

  ngOnInit() {
  }

  public errorHandling = (control: string, error: string) => {
    return this.registerForm.controls[control].hasError(error);
  }

  post1: any;
  onRegisterSubmit(post1) {
     this.showDetails=true;
     this.user.firstName = post1.firstName;
     this.user.lastName = post1.lastName;
     this.user.email = post1.email;
     this.user.phoneNumber=post1.phoneNumber
    this.changedPhoneNumber = this.user.phoneNumber.slice(2);
  }

}
