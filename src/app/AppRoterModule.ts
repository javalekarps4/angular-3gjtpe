import {LoginComponent}from './login/login.component';
import{RegisterComponent}from './register/register.component';
import{PagenotfoundComponent}from'./pagenotfound/pagenotfound.component';
import{RouterModule,Routes}from'@angular/router';
import {WelcomeComponent}from'./welcome/welcome.component';
import{NgModule}from'@angular/core';

const AppRoutes:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'',
    redirectTo:'/welcome',
    pathMatch:'full'
  },
  {
     path:'**',
     component:PagenotfoundComponent,
     pathMatch:'full'
  }

];
