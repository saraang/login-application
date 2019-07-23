import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, WelcomeComponent, ErrorComponent, ListsComponent, MenuComponent, FooterComponent, LogoutComponent ],
  providers: [HardcodedAuthenticationService, RouteGuardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  username: string;
}
