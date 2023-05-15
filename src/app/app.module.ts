import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { CrearComponent } from './usuario/crear/crear.component';
import { DatosPersonalesComponent } from './usuario/datos-personales/datos-personales.component';
import { CambioPassComponent } from './usuario/cambio-pass/cambio-pass.component';
import { EnviadosComponent } from './cobros/activos/enviados/enviados.component';
import { RecibidosComponent } from './cobros/activos/recibidos/recibidos.component';
import { ArchivadosComponent } from './cobros/archivados/archivados.component';
import { CobroComponent } from './cobros/cobro/cobro.component';

//eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactoComponent,
    LoginComponent,
    CrearUsuarioComponent,
    MenuNavegacionComponent,
    CrearPagoComponent,
    CrearComponent,
    DatosPersonalesComponent,
    CambioPassComponent,
    EnviadosComponent,
    RecibidosComponent,
    ArchivadosComponent,
    CobroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

