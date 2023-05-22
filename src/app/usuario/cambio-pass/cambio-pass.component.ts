import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { CambioPassService } from './service/cambio-pass.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.component.html',
  styleUrls: ['./cambio-pass.component.scss']
})
export class CambioPassComponent {

  hideActual: boolean = true;
  hideNueva: boolean = true;
  hideConfirmar: boolean = true;
  token: string = "";

  passActual = new FormControl('', [Validators.required, Validators.minLength(6)]);
  passNuevo = new FormControl('', [Validators.required, Validators.minLength(6)]);
  passConfirmar = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(
    private cambioPassService: CambioPassService,
    private alertaSnackBar: MatSnackBar,
    private router: Router,
    private generalService: GeneralService) { }

  ngOnInit() {

    this.generalService.recibir_token.subscribe((token) => { this.token = token; });

  }

  errorPassActual() {
    if (this.passActual.hasError('required')) {
      return 'El campo contraseña actual no puede estar vacía';
    }

    return this.passActual.hasError('minlength') ? 'La contraseña actual debe tener mínimo 6 carácteres' : '';
  }

  errorPassNuevo() {
    if (this.passNuevo.hasError('required')) {
      return 'El campo contraseña nueva no puede estar vacía';
    }

    return this.passNuevo.hasError('minlength') ? 'La contraseña nueva debe tener mínimo 6 carácteres' : '';
  }

  errorPassConfirmar() {
    if (this.passConfirmar.hasError('required')) {
      return 'El campo confirmar contraseña no puede estar vacía';
    }

    return this.passConfirmar.hasError('minlength') ? 'La contraseña para confirmar debe tener mínimo 6 carácteres' : '';
  }

  btnModificarContrasenya() {
    let error: boolean = false;
    let msg: string = "";

    if (this.passActual.value?.trim() === "" || this.passActual.hasError('required') || this.passActual.hasError('minlength')) {
      error = true;
      msg = 'El password actual no puede estar vacío o no cumplir el mínimo de carácteres\n';
    }

    if (!error && (this.passNuevo.value?.trim() === "" || this.passNuevo.hasError('required') || this.passNuevo.hasError('minlength'))) {
      error = true;
      msg = 'El password nuevo no puede estar vacío o no cumplir el mínimo de carácteres\n';
    }

    if (!error && (this.passConfirmar.value?.trim() === "" || this.passConfirmar.hasError('required') || this.passConfirmar.hasError('minlength'))) {
      error = true;
      msg = 'La confirmación de password no puede estar vacía o no cumplir el mínimo de carácteres\n';
    }

    if (!error && (this.passNuevo.value?.trim() !== this.passConfirmar.value?.trim())) {
      error = true;
      msg = "La contraseña de verificación no es idéntica a la nueva";
    }

    if (error) {
      this.lanzarAlerta(msg);
    }
    else {
      let passO = this.passActual.value?.trim() || "";
      let passN = this.passNuevo.value?.trim() || "";
      this.cambioPassService.cambiarPassword(this.token, passO, passN).subscribe(
        (res) => {
          this.lanzarAlerta(res.message);
          if (res.ok) {
            this.passActual.reset();
            this.passNuevo.reset();
            this.passConfirmar.reset();
            // se queda en la misma página
          }
        },
        (err) => {
          let msg = (err.message) ? err.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
          this.lanzarAlerta(msg);
        }
      );
    }

  }

  lanzarAlerta(msg: string) {
    this.alertaSnackBar.open(msg, undefined, {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
