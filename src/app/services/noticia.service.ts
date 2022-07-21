import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private readonly env: string;

  constructor(private readonly _http: HttpClient) {
    this.env = environment.API_Noticias;
  }

  getNoticias(): Observable<any>{
    const params = new HttpParams()
      .append('sources', 'bbc-news')
      .append('apiKey', '7c1ccec7b2a94550a747635ec856a446');

    //const requestOptions = { headers: headers};

    return this._http.get(this.env, {params: params});
    
  }
}
