import { Component, OnInit } from '@angular/core';
import { BartenderService } from '../services/bartender.service';

@Component({
  selector: 'app-listbt',
  templateUrl: './listbt.component.html',
  styleUrls: ['./listbt.component.css']
})
export class ListbtComponent implements OnInit {
  listbt:any;
  constructor(public bartenderService:BartenderService) { }

  ngOnInit() {
    this.bartenderService.bartenderList()
      .subscribe( result => this.listbt = result);
  }

}
