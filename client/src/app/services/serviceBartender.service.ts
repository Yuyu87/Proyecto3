import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/serviceBartender";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class ServiceBartenderService {
  constructor(private http: Http) {}

  serviceBartenderList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  serviceBartenderByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  createServiceBartender(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }

  editServiceBartender(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }
  deleteServiceBartender(id){
      return this.http.delete(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

}
