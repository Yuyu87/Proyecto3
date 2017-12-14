import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from '../app.component';
import { RecipeService }  from '../services/recipe.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:object;
  myrecipes:any;
  constructor(public auth:AuthService, public recipeService:RecipeService) {

  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user = user );

    this.recipeService.recipesListByBartender()
        .subscribe( myrecipes => this.myrecipes = myrecipes);

  }

}
