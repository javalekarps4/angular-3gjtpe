import { Component } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Tokenid=localStorage.getItem('token');
  constructor(private _rote:Router){}
  isTokenAvailable()
  {
      if(this.Tokenid)
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
