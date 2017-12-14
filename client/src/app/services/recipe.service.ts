import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/recipe";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class RecipeService {
    private options = {withCredentials:true};

  constructor(private http: Http) {}

  recipesList():Observable<any>{
      return this.http.get(BASEURL+'/recipes', this.options)
                      .map(res => res.json());
  }

  recipesListByBartender():Observable<any>{
      return this.http.get(BASEURL+'/recipesbybartender', this.options)
                      .map(res => res.json());
  }

  recipeByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/recipes/${id}`, this.options)
                      .map(res => res.json());
  }

  createRecipe(e):Observable<any>{
      return this.http.post(BASEURL+'/recipes', e, this.options)
                      .map(res => res.json());
  }

  deleteRecipe(id){
      return this.http.delete(`${BASEURL+'/recipes'}/${id}`, this.options)
                      .map(res => res.json());
  }

}
