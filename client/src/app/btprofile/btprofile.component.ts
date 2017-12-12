import { Component, OnInit } from '@angular/core';
import {BartenderService} from '../services/bartender.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-btprofile',
  templateUrl: './btprofile.component.html',
  styleUrls: ['./btprofile.component.css']
})
export class BtprofileComponent implements OnInit {
  btprofile:any;
  constructor(public bartenderService:BartenderService, public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
    // this.bartenderService.bartenderByID(id)
    //   .subscribe( result => this.btprofile = result);
    }

  }
