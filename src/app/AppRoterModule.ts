import {LoginComponent}from './login/login.component';
import{RegisterComponent}from './register/register.component';
import{PagenotfoundComponent}from'./pagenotfound/pagenotfound.component';
import{RouterModule,Routes}from'@angular/router';
import {WelcomeComponent}from'./welcome/welcome.component';
import{MenuComponent}from'./menu/menu.component'
import{NgModule}from'@angular/core';
import {GuardGuard} from'./guard.guard';

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
    component:WelcomeComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'menu',
    component:MenuComponent
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
@NgModule({
 imports:[RouterModule.forRoot(AppRoutes)],
 exports:[RouterModule]
})
export class AppRouterModule{}
