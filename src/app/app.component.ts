import { Component } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  constructor(private _rote:Router){}
  isTokenAvailable()
  {
      if(localStorage.getItem('token'))
      return true;
      else
      return false;
  }
  logoutUser()
  {
    localStorage.removeItem("token");
    this._rote.navigate(['/login']);

  }
}
