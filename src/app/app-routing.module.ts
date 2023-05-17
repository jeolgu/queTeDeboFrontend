import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './web/inicio/inicio.component';
import { QuienesSomosComponent } from './web/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './web/contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './usuario/crear/crear.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
