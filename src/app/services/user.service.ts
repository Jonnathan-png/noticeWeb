import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface userlogin{
  access_token: string;
  token_type: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly env: string;

  constructor(private readonly _http: HttpClient, private readonly _router: Router) {
    this.env = environment.API_Login;
  }

  login(dataUser: any): Observable<any>{
    /* const headers= new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded'); */
    


    const params = new HttpParams()
      .append('username', dataUser['username'])
      .append('password', dataUser['password']);

    //const requestOptions = { headers: headers};

    return this._http.post(this.env + '/login', dataUser);
    
  }
}
