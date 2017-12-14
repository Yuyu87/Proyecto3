import { Component, OnInit } from '@angular/core';
import { UserService }  from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user = {
    username:"",
    email:"",
    city:"",
    style:"",
    description:""
  }

  constructor(
    private router:Router,
    public userService: UserService,
    public auth:AuthService) { }

  ngOnInit() {
    this.auth.isLoggedIn()
        .subscribe( user => {
          this.user = user} );
  }
  editUser(){
    console.log(this.user)
    this.userService.editUser(this.user)
       .subscribe(res =>{
         console.log(res);
    });
  }
}
