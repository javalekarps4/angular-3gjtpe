import { Component, OnInit } from '@angular/core';
import{FormBuilder}from'@angular/forms';

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
  email:[''],
  password:['']
})
email()
{
  this.LoginForm.get('email');
}
password()
{
  this.LoginForm.get('password');
}
}