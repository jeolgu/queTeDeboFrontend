import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './web/inicio/inicio.component';
import { QuienesSomosComponent } from './web/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './web/contacto/contacto.component';
import { LoginComponent } from './usuario/login/login.component';
import { CrearUsuarioComponent } from './usuario/crear/crear.component';
import { CobroComponent } from './cobros/cobro/cobro.component';
import { CrearCobroComponent } from './cobros/crear/crear.component';
import { ActivosEnviadosComponent } from './cobros/activos/enviados/enviados.component';
import { ActivosRecibidosComponent } from './cobros/activos/recibidos/recibidos.component';
import { HistoricoEnviadosComponent } from './cobros/historico/enviados/enviados.component';
import { HistoricoRecibidosComponent } from './cobros/historico/recibidos/recibidos.component';
import { ArchivadosComponent } from './cobros/archivados/archivados.component';
import { CambioPassComponent } from './usuario/cambio-pass/cambio-pass.component';
import { DatosPersonalesComponent } from './usuario/datos-personales/datos-personales.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'crear-cobro', component: CrearCobroComponent },
  { path: 'activos-enviados', component: ActivosEnviadosComponent },
  { path: 'activos-recibidos', component: ActivosRecibidosComponent },
  { path: 'historico-enviados', component: HistoricoEnviadosComponent },
  { path: 'historico-recibidos', component: HistoricoRecibidosComponent },
  { path: 'archivados', component: ArchivadosComponent },
  { path: 'modificar-pass', component: CambioPassComponent },
  { path: 'datos-personales', component: DatosPersonalesComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
