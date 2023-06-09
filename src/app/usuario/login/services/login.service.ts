import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: string,
    password: string){

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const parametros = {
      usuario: usuario,
      password: password
    };

   return this.http.post<any>(`${URL}/user/login`, parametros, {headers});
  }
}
