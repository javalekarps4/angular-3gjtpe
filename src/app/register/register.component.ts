import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from'@angular/forms';
import{forbiddenNameValidator}from'../shared/customvalidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // RegistrationForm=new FormGroup({
  //   fullname:new FormControl(''),
  //   username:new FormControl(''),
  //   password:new FormControl('')
  // });

  constructor(private fb:FormBuilder) { }
    RegistrationForm=this.fb.group({
      fullname:['',Validators.required],
      username:['',Validators.required,forbiddenNameValidator],
      password:['',Validators.required]
    })
  ngOnInit() {
  }
  fullnameValidation()
  {
    if(this.RegistrationForm.get('fullname').invalid&&(this.RegistrationForm.get('fullname').touched||this.RegistrationForm.get('fullname').dirty))
    {
         return true;
    }
    else
    return false;
  }
  usernameValidation()
  {
    if(this.RegistrationForm.get('username').invalid&&(this.RegistrationForm.get('username').touched||this.RegistrationForm.get('username').dirty))
    {
         return true;
    }
    else
    return false;
  }
  passwordValidation()
  {
    if(this.RegistrationForm.get('password').invalid&&(this.RegistrationForm.get('password').touched||this.RegistrationForm.get('password').dirty))
    {
         return true;
    }
    else
    return false;
  }
  onSubmit()
  {
    console.log(JSON.stringify(this.RegistrationForm.value));
  }

}