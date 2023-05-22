import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';
import { ICobro } from '../models/i-cobro';
import { IconResolver } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class CobrosService {

  constructor(private http: HttpClient) { }
  // GET
  activosEnviados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      // .set('Content-Type', 'text/plain')
      // .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/cobro/activos-enviados`, null, { headers });
  }

  activosRecibidos( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/cobro/activos-recibidos`, null, { headers });
  }

  historicoEnviados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/cobro/historico-enviados`, null, { headers });
  }

  historicoRecibidos( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/cobro/historico-recibidos`, null, { headers });
  }

  archivados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${URL}/cobro/almacenados`, null, { headers });
  }

  // SET
  // CREAR COBRO
  crearCobro( token: string, cobro: any ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    // const parametros = new HttpParams()
    //   .set("cobro", JSON.stringify(cobro));

    return this.http.put<any>(`${URL}/cobro/crear`, JSON.stringify(cobro), { headers });
  }

  // PASAR A PENDIENTE DE REVISAR
  setPendienteRevisar( token: string, cobro: number ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    // const parametros = new HttpParams()
    //   .set("cobro", cobro);

    const parametros = {
      cobro: cobro
    };

    return this.http.put<any>(`${URL}/cobro/revisar`, parametros, { headers });
  }

  // PASAR A COMPLETADO
  setCompletado( token: string, cobro: any ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    // const parametros = new HttpParams()
    //   .set("cobro", cobro);

    const parametros = {
      cobro: cobro
    };

    return this.http.put<any>(`${URL}/cobro/completar`, parametros, { headers });
  }

  // PASAR A ALMACENADO
  setAlmacenado( token: string, cobro: number ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    // const parametros = new HttpParams()
    //   .set("cobro", cobro);

    const parametros = {
      cobro: cobro
    };

    return this.http.put<any>(`${URL}/cobro/archivar`, parametros, { headers });
  }

}
