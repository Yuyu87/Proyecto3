import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/review";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class ReviewService {
  constructor(private http: Http) {}

  reviewList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  reviewByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  createReview(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }

  editReview(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }
  deleteReview(id){
      return this.http.delete(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

}
