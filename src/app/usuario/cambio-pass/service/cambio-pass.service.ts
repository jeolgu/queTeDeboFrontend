import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CambioPassService {

  constructor(private http: HttpClient) { }

  cambiarPassword(token: string,
    passwordOld: string,
    passwordNew: string){

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    const parametros = new HttpParams()
      .set("passwordO", passwordOld)
      .set("passwordN", passwordNew);

    return this.http.put<any>(`${URL}/user/mod-pass`, parametros, {headers});
  }
}
