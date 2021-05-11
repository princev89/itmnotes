import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SelectsubjectComponent } from './selectsubject/selectsubject.component';

@NgModule({
  imports:      [  RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      {path: '**', component: LoginComponent}
    ]),BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, LoginComponent, HomeComponent, AboutComponent, SelectsubjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
