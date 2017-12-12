import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/recipe";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class RecipeService {
  constructor(private http: Http) {}

  recipesList():Observable<any>{
      return this.http.get(BASEURL+'/recipes')
                      .map(res => res.json());
  }

  recipeByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/recipes/${id}`)
                      .map(res => res.json());
  }

  createRecipe(e):Observable<any>{
      return this.http.post(BASEURL+'/recipes', e)
                      .map(res => res.json());
  }

  deleteRecipe(id){
      return this.http.delete(`${BASEURL+'/recipes'}/${id}`)
                      .map(res => res.json());
  }

}
