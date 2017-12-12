import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-btprofile',
  templateUrl: './btprofile.component.html',
  styleUrls: ['./btprofile.component.css']
})
export class BtprofileComponent implements OnInit {
  btprofile:any;
  constructor(public userService:UserService, public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => { console.log(params);
          this.userService.userByID(params['id'])
            .subscribe(result => this.btprofile = result);
        })
      }
    }
