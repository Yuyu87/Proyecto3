import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listbt',
  templateUrl: './listbt.component.html',
  styleUrls: ['./listbt.component.css']
})
export class ListbtComponent implements OnInit {
  listbt:any;
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.userBartenderList()
      .subscribe( result => this.listbt = result);
  }

}
