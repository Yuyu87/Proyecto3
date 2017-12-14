import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-recipesform',
  templateUrl: './recipesform.component.html',
  styleUrls: ['./recipesform.component.css']
})
export class RecipesformComponent implements OnInit {
  recipesForm = {
    name:"",
    glass:"",
    method:"",
    ice:"",
    ingredients:"",
    garnish:""
  }

  constructor( private router:Router,
    private recipeService:RecipeService,
    public auth:AuthService) { }

  ngOnInit() {

  }
createRecipe(e){
  console.log('create recipe')
  console.log(e.value)
  this.recipeService.createRecipe(e.value)
    .subscribe(()=>{
      this.router.navigate(['/userprofile']);

    });
  }
}
