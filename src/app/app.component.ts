import { Component } from '@angular/core';
import{Route}from'@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Tokenid=localStorage.getItem('token');
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
  }
}
