import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from'@angular/forms';

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
      username:[''],
      password:['']
    })
  ngOnInit() {
  }

}