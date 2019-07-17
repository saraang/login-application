import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, WelcomeComponent, ErrorComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  username: string;
}
