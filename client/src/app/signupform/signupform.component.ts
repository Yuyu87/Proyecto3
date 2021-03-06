import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:""
}
  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe(()=>this.router.navigate(['/login']));
    } else{
      console.log("You must set a username and a password");
    }
  }

}
