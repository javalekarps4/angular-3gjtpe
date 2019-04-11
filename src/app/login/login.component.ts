import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _formbuilder:FormBuilder) { }

  ngOnInit() {
  }
LoginForm=this._formbuilder.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.maxLength(8)]]
})
email()
{
  this.LoginForm.get('email');
}
password()
{
  this.LoginForm.get('password');
}
onLogin()
{
  console.log(JSON.stringify(this.LoginForm.value));
  alert('Login successful');
}
}