import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Utilidades } from 'src/app/utilidades';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.minLength(6)]);
  recordar: boolean = false;

  constructor(
    private loginService: LoginService,
    private utilidades: Utilidades,
    private router: Router,
    private general: GeneralService) { }

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

  btnLoginUsuario() {
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
      this.loginService.login(usuario_nuevo, contrasenya).subscribe(
        (res) => {
          if(!res.ok) {
            this.utilidades.lanzarAlerta(res.message);
          }
          else {
            this.pass.reset();
            this.email.reset();

            // OCULTAR MENU DE LOGIN (REACTIVO) Y  MOSTRAR LOGOUT (REACTIVO)
            this.general.setLogueado(true);

            // CREAR REACTIVA DEL TOKEN
            this.general.setToken(res.token);

            // SI GUARDAR LOGIN (GUARDAR EL TOKEN EN LOCALSTORAGE)
            if(this.recordar) localStorage.setItem("token", res.token);

            // PARA FINALIZAR IREMOS A LA PAGINA DE INICIO (de momento)
            this.router.navigate(['inicio']);
          }
        },
        (err) => {
          let msg = (err.message) ? err.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
          this.utilidades.lanzarAlerta(msg);
        }
      );
    }
    else {
      this.utilidades.lanzarAlerta(msg);
    }
  }


  // lanzarAlerta(msg: string) {
  //   this.alertaSnackBar.open(msg, undefined, {
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     duration: 3000,
  //   });
  // }

  mostrarCrearUsuario(){
    this.router.navigate(['crear-usuario']);
  }
}
