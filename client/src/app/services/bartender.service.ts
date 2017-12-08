import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/bartender";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class BartenderService {
  constructor(private http: Http) {}

  bartenderList():Observable<any>{
      return this.http.get(BASEURL+'/bartenders')
                      .map(res => res.json());
  }

  bartenderByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  createBartender(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }

  editBartender(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }
  deleteBartender(id){
      return this.http.delete(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

}
