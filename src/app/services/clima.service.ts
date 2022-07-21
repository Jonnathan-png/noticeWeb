import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private readonly env: string;

  constructor(private readonly _http: HttpClient) {
    this.env = environment.API_Clima;
  }

  getClima(): Observable<any>{
    const params = new HttpParams()
      .append('q', 'cali')
      .append('appid', '1a3a1d0e5cf4ee13bd1167dc47d745fe');

    return this._http.get(this.env, {params: params});
  }
}
