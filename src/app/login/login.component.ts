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
  email:['',[Validators.required]],
  password:['',[Validators.required,Validators.maxLength(8)]]
})
email()
{
  return this.LoginForm.get('email');
}
password()
{
return  this.LoginForm.get('password');
}
emailValidation()
{
  if(this.LoginForm.get('email').invalid && (this.LoginForm.get('email').dirty||this.LoginForm.get('email').touched))
  {
    return true;
  }
  else
  return false;
}
passwordValidation()
{
  if(this.LoginForm.get('password').invalid||this.LoginForm.get('password').dirty)
  {
    return true;
  }
  return false;
}
onLogin()
{
  console.log(JSON.stringify(this.LoginForm.value));
  alert('Login successful');
}
}