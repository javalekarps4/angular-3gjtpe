import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
   title='hello';
  ngOnInit() {
  }
  Tokenid=localStorage.getItem('token');
  isTokenAvailable()
  {
      if(this.Tokenid)
      return true;
      else
      return false;
  }

}