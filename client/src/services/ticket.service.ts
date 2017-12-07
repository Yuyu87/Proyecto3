import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/ticket";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class TicketService {
  constructor(private http: Http) {}

  ticketList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  ticketByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  createTicket(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }

  editTicket(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }
  deleteTicket(id){
      return this.http.delete(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

}
