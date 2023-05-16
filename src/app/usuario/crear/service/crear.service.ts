import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CrearService {

  constructor(private http: HttpClient) { }
}
