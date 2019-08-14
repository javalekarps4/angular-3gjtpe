import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from'@angular/forms';
import{forbiddenNameValidator}from'../shared/customvalidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
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
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
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
    if(this.RegistrationForm.get('email').invalid&&(this.RegistrationForm.get('email').touched||this.RegistrationForm.get('email').dirty))
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

   fullname()
   {
    return this.RegistrationForm.get('fullname');
   }
   email()
   {
    return this.RegistrationForm.get('email');
   }
   password()
   {
    return this.RegistrationForm.get('password');
   }


  onSubmit()
  {
    console.log("submitted")

    //let obj={email:this.username(),password:this.password()};
  
    //  this.oauth.oauthRegister(obj).then(res=>{console.log(res)
    //   alert("account created successfully")},err=>{console.log(err);
    //   alert("something went wrong please try again")});
    

  }
  

}