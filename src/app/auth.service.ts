import { Injectable } from '@angular/core';
import{Router}from'@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthServiceService {

  constructor() { }

    oauthRegister(value)
   {
      return new Promise<any>((resolve,reject)=>{firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
        .then(res=>{resolve(res);}
        ,err=>reject(err))})
   }

}