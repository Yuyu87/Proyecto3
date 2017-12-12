import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';


interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .subscribe(()=>this.router.navigate(['/']));


//       export class MyAboutComponent implements OnInit {
//
//   constructor(private router: Router) { }
//
//   ngOnInit() {}
//
//   goToHome() {
//     this.router.navigate(['/home']);  // <!-- Programmatically navigate to home
//   }
// }

    } else{
      console.log("You must set a username and a password");
    }
  }

}
