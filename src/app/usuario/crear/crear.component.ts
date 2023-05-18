import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { CrearService } from './service/crear.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearUsuarioComponent {

  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(
    private crearUsuario: CrearService,
    private alertaSnackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {

  }

  errorEmail() {
    if (this.email.hasError('required')) {
      return 'El campo email no puede estar vacío';
    }

    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  errorPass() {
    if (this.pass.hasError('required')) {
      return 'El campo contraseña no puede estar vacío';
    }

    return this.pass.hasError('minlength') ? 'La pass debe tener mínimo 6 carácteres' : '';
  }

  btnCrearUsuario() {
    let error = false;
    let msg: string = "";
    if (this.pass.value?.trim() === "" || this.pass.hasError('required') || this.pass.hasError('minlength')) {
      error = true;
      msg = 'El password no puede estar vacío o no cumplir el mínimo de carácteres\n';
    }

    if (this.email.value?.trim() === "" || this.email.hasError('required') || this.pass.hasError('email')) {
      error = true;
      msg = 'El usuario no puede estar vacío o sin el formato específico\n';
    }

    if (!error) {
      // Podremos lanzar la creación
      let usuario_nuevo = this.email.value?.trim() || "";
      let contrasenya = this.pass.value?.trim() || "";
      this.crearUsuario.crearUsuario(usuario_nuevo, contrasenya).subscribe(
        (res) => {
          this.lanzarAlerta(res.message);
          if (res.ok) {
            this.pass.reset();
            this.email.reset();
            this.router.navigate(['login']);
          }
        },
        (err) => {
          let msg = (err.message) ? err.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
          this.lanzarAlerta(msg);
        }
      );
    }
    else {
      this.lanzarAlerta(msg);
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
