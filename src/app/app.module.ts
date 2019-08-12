import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{MaterialModule} from './MaterialModule';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import{ReactiveFormsModule}from'@angular/forms'
import{AppRouterModule}from './AppRoterModule';
import { MenuComponent } from './menu/menu.component';
import { AuthServiceService } from './auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Oauth2Service } from './login/oauth2.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRouterModule,ReactiveFormsModule,AngularFireModule,AngularFireAuthModule,AngularFirestoreModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, RegisterComponent, PagenotfoundComponent, WelcomeComponent, MenuComponent ],
 
  bootstrap:    [ AppComponent ],
 
  providers: [AuthServiceService, Oauth2Service]
})
export class AppModule { }
