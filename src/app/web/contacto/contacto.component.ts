import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Utilidades } from '../../../../src/app/utilidades';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  nombre = new FormControl('', [Validators.required, Validators.minLength(1)]);
  correo = new FormControl('', [Validators.required, Validators.email]);
  mensaje = new FormControl('', [Validators.required, Validators.minLength(1)]);
  aceptar = new FormControl('', [Validators.required]);


  constructor(private utilidades: Utilidades) { }


  ngOnInit() {

  }

  errorNombre() {
    if (this.nombre.hasError('required')) {
      return 'El nombre no puede estar vacío';
    }

    return this.nombre.hasError('minlength') ? 'Mínimo tiene que tener 1 carácter' : '';
  }

  errorCorreo() {
    if (this.correo.hasError('required')) {
      return 'El campo email no puede estar vacío';
    }

    return this.correo.hasError('email') ? 'No es un email valido' : '';
  }

  errorMensaje() {
    if (this.correo.hasError('required')) {
      return 'El mensaje no puede estar vacío';
    }

    return this.mensaje.hasError('minlength') ? 'Mínimo tiene que tener 1 carácter' : '';
  }

  enviarFormulario() {
    let error = false;
    let msg: string = "";
    if (this.nombre.value?.trim() === "" || this.nombre.hasError('required') || this.nombre.hasError('minlength')) {
      error = true;
      msg = 'El nombre no puede estar vacío o no cumplir el mínimo de carácteres\n';
    }

    if (this.correo.value?.trim() === "" || this.correo.hasError('required') || this.correo.hasError('email')) {
      error = true;
      msg = 'El email no puede estar vacío o sin el formato específico\n';
    }

    if (this.mensaje.value?.trim() === "" || this.mensaje.hasError('required') || this.mensaje.hasError('minlength')) {
      error = true;
      msg = 'El mensaje no puede estar vacío o no cumplir el mínimo de carácteres\n';
    }

    if(this.aceptar.hasError("required")){
      error = true;
      msg = "Debe aceptar los términos de la empresa";
    }

    if (!error) {
      this.utilidades.lanzarAlerta("Contacto enviado con éxito");
      this.vaciarContacto();
    }
    else{
      this.utilidades.lanzarAlerta(msg);
    }
  }

  vaciarContacto(){
    this.correo.reset();
    this.nombre.reset();
    this.mensaje.reset();
    this.aceptar.reset();
  }
}
