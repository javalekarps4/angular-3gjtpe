import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)
export class GuardGuard implements CanActivate {
  constructor(private _route:Router){}
  canActivate()
  {
    if(localStorage.getItem("token"))
   {
     return true;
   }
   else
   {
    this._route.navigate(["/login"]);
   }
   return false;
  }
}
