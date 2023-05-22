import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosPersonalesService } from './service/datos-personales.service';
import { GeneralService } from 'src/app/services/general.service';
import { Utilidades } from 'src/app/utilidades';
import { IUsuario } from './models/i-usuario';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../../utilidades/confirmacion/confirmacion.component';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent {

  token: string = "";
  hide: boolean = true;

  nombre: string = "";
  apellidos: string = "";
  edad: number = 0;
  localidad: string = "";
  cp: string = "";
  direccion: string = "";
  pais: any = "";
  idioma_predefinido: any = "ES";

  usuarioOld: any;

  constructor(
    private datosPersonalesService: DatosPersonalesService,
    private generalService: GeneralService,
    private utilidades: Utilidades,
    private dialogo: MatDialog
  ) {

  }
  ngOnInit() {

    this.generalService.recibir_token.subscribe((token) => { this.token = token; });
    this.datosPersonalesService.datosPersonales(this.token).subscribe(
      (res) => {
        let usuario = res[0];
        this.nombre = usuario.nombre || "";
        this.apellidos = usuario.apellidos || "";
        this.edad = usuario.edad || 0;
        this.localidad = usuario.localidad || "";
        this.cp = usuario.cp || "";
        this.direccion = usuario.direccion || "";
        this.pais = usuario.pais || "";
        this.idioma_predefinido = usuario.idioma_predefinido;

        this.usuarioOld = usuario;
      },
      (error) => {
        let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
        this.utilidades.lanzarAlerta(msg);
      }
    );

  }

  btnGuardarDatosPersonales() {
    let nuevosDatos: IUsuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      localidad: this.localidad,
      cp: this.cp,
      direccion: this.direccion,
      pais: this.pais,
      idioma_predefinido: this.idioma_predefinido
    }

    this.datosPersonalesService.guardarDatosPersonales(this.token, nuevosDatos).subscribe(
      (res) => {
        this.utilidades.lanzarAlerta(res.message);
      },
      (error) => {
        let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
        this.utilidades.lanzarAlerta(msg);
      }
    );
  }

  btnRefrescarValoresAnteriores(): void {
    this.dialogo
      .open(ConfirmacionComponent, {
        data: `¿Deseas restaurar los datos? Los datos modificados no se guardarán`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.nombre = this.usuarioOld.nombre || "";
          this.apellidos = this.usuarioOld.apellidos || "";
          this.edad = this.usuarioOld.edad || 0;
          this.localidad = this.usuarioOld.localidad || "";
          this.cp = this.usuarioOld.cp || "";
          this.direccion = this.usuarioOld.direccion || "";
          this.pais = this.usuarioOld.pais || "";
          this.idioma_predefinido = this.usuarioOld.idioma_predefinido;
        }
      });
  }
}
