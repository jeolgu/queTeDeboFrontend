import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private token: string = "";
  private token_message = new BehaviorSubject(this.token);
  recibir_token = this.token_message.asObservable();

  private logueado: boolean = false;
  private logueado_message = new BehaviorSubject(this.logueado);
  recibir_logueado = this.logueado_message.asObservable();

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token_message.getValue();
  }

  setToken(tokenRecibido: string) {
    this.token_message.next(tokenRecibido);
  }

  getLogueado(){
    return this.logueado_message.getValue();
  }

  setLogueado(estaLogueado: boolean){
    this.logueado_message.next(estaLogueado);
  }

  // para utilizarlo hay que tener la subscripcion y así podemos acceder al valor cuando se modifique.

}
