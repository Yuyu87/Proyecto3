import { BrowserModule } from '@angular/platform-browser';
import {routes} from './routes';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BtprofileComponent } from './btprofile/btprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ListbtComponent } from './listbt/listbt.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { AuthService } from './services/auth.service';
import { BartenderService } from './services/bartender.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { ReviewService } from './services/review.service';
import { ServiceBartenderService } from './services/serviceBartender.service';
import { TicketService } from './services/ticket.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    BtprofileComponent,
    EditprofileComponent,
    ListbtComponent,
    IndexComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [
    AuthService,
    IsLoggedInService,
    BartenderService,
    ReviewService,
    ServiceBartenderService,
    TicketService,
    UserService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
