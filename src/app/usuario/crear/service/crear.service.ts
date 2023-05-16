import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CrearService {

  constructor(private http: HttpClient) { }

  crearUsuario(
    usuario: string,
    password: string) {

    const parametros = new HttpParams()
      .set("usuario", usuario)
      .set("password", password);

    return this.http.put<any>(`${URL}/user/crear`, parametros);
  }
}
