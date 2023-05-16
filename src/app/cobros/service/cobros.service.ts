import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';
import { ICobro } from '../models/i-cobro';

@Injectable({
  providedIn: 'root'
})
export class CobrosService {

  constructor(private http: HttpClient) { }
  // GET
  activosEnviados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<ICobro>(`${URL}/cobro/activos-enviados`, null, { headers });
  }

  activosRecibidos( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<ICobro>(`${URL}/cobro/activos-recibidos`, null, { headers });
  }

  historicoEnviados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<ICobro>(`${URL}/cobro/historico-enviados`, null, { headers });
  }

  historicoRecibidos( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<ICobro>(`${URL}/cobro/historico-recibidos`, null, { headers });
  }

  almacenados( token: string ) {

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.post<ICobro>(`${URL}/cobro/almacenados`, null, { headers });
  }

  // SET
}
