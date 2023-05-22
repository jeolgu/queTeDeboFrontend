import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';
import { IUsuario } from '../models/i-usuario';
@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http: HttpClient) { }

  datosPersonales( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/user/datos-personales`, null, { headers });
  }

  /* REVISAR */
  guardarDatosPersonales(token: string,
    datos_personales: any ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    // const parametros = new HttpParams()
    //   .set("datos_personales", JSON.stringify(datos_personales));

    return this.http.put<any>(`${URL}/user/datos-personales`, JSON.stringify(datos_personales), { headers });
  }
}
