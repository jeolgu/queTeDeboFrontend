import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import { ContactoComponent} from './contacto/contacto.component';
import { LoginComponent} from './login/login.component';
import { CrearUsuarioComponent} from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
