import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/user";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  userList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }
/*preguntar si está ok*/
  userBartenderList():Observable<any>{
      return this.http.get(BASEURL+'/users/bartenders')
                      .map(res => res.json());
  }


  userByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/users/${id}`)
                      .map(res => res.json());
  }

  createUser(e):Observable<any>{
      return this.http.post(BASEURL, e)
                      .map(res => res.json());
  }
/*preguntar si está ok*/
  createUserBartender(e):Observable<any>{
      return this.http.post(BASEURL+'/bartenders', e)
                      .map(res => res.json());
  }

/*aquí creo que debería poner el id seguido de BASEURL: `${BASEURL}/${id}` */
  editUser(e):Observable<any>{
      return this.http.post(BASEURL+'/users', e)
                      .map(res => res.json());
  }
  deleteUser(id){
      return this.http.delete(`${BASEURL}/users/${id}`)
                      .map(res => res.json());
  }

}
