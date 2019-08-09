import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class Oauth2Service {

  constructor(public OAuth: AngularFireAuth) { 

  }
   
   async oauthLogin(email,password)
   {
      try{
        

      }catch(e)
      {
      
      }
   }
}