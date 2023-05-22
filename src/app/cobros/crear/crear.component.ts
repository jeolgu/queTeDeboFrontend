import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Utilidades } from 'src/app/utilidades';
import { CobrosService } from '../service/cobros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearCobroComponent {

  token: string = "";
  receptor: string = "";
  creacion: Date = new Date();
  titulo: string = "";
  texto: string = "";
  importe: number = 0;
  minima_fecha: Date = new Date(new Date().getFullYear() + "-01-01"); // iniciamos siempre a principio de año
  maxima_fecha: Date = new Date(new Date().setMonth(new Date().getMonth()+6)); // máximo ponemos fecha a 6 meses de selección.
  inicio_semana: number = 1;

  constructor(
    private generalService: GeneralService,
    private cobrosService: CobrosService,
    private utilidades: Utilidades
  ) {

  }

  ngOnInit(){
    this.generalService.recibir_token.subscribe((token) => { this.token = token; });
  }

  vaciarDatos(){
    // vaciar todos los campos input
    this.receptor = "";
    this.creacion = new Date();
    this.titulo = "";
    this.texto = "";
    this.importe = 0;

  }

  btnCrearCobro(){
    // crearemos y enviaremos el cobro al back para que lo guarde en la bbdd.

    let nuevoCobro = {
      receptor: this.receptor,
      creacion: this.creacion,
      titulo: this.titulo,
      texto: this.texto,
      importe: this.importe
    };

    this.cobrosService.crearCobro(this.token, nuevoCobro).subscribe(
      (res) => {
        this.utilidades.lanzarAlerta(res.message);
        if(res.ok) this.vaciarDatos();
      },
      (error) => {
        let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
        this.utilidades.lanzarAlerta(msg);
      }
    );
  }
}
