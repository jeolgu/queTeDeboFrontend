import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";

// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenu, MatMenuModule } from '@angular/material/menu';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { InicioComponent } from './web/inicio/inicio.component';
import { QuienesSomosComponent } from './web/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './web/contacto/contacto.component';
import { LoginComponent } from './usuario/login/login.component';

import { CrearCobroComponent } from './cobros/crear/crear.component';
import { CrearUsuarioComponent } from './usuario/crear/crear.component';
import { DatosPersonalesComponent } from './usuario/datos-personales/datos-personales.component';
import { CambioPassComponent } from './usuario/cambio-pass/cambio-pass.component';

import { CobroComponent } from './cobros/cobro/cobro.component';
import { ActivosEnviadosComponent } from './cobros/activos/enviados/enviados.component';
import { ActivosRecibidosComponent } from './cobros/activos/recibidos/recibidos.component';
import { HistoricoEnviadosComponent } from './cobros/historico/enviados/enviados.component';
import { HistoricoRecibidosComponent } from './cobros/historico/recibidos/recibidos.component';
import { ArchivadosComponent } from './cobros/archivados/archivados.component';

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
    CrearCobroComponent,
    CrearUsuarioComponent,
    DatosPersonalesComponent,
    CambioPassComponent,
    ActivosEnviadosComponent,
    ActivosRecibidosComponent,
    HistoricoEnviadosComponent,
    HistoricoRecibidosComponent,
    ArchivadosComponent,
    CobroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    HttpClientModule,
    FlexLayoutModule,
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

