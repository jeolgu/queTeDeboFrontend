import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from './services/general.service';
import { TranslateConfigService } from './translate-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public lang: any;
  token: any;
  logueado: any = false;
  mostrar: boolean = false;

  constructor(
    private translateConfigService: TranslateConfigService,
    private TranslateService: TranslateService,
    private generalService: GeneralService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.token = this.generalService.getToken();
    if (!this.token && localStorage.getItem("token")) this.token = localStorage.getItem("token") || "";

    if (!this.token || this.token == "") {
      // redirigir a inciio
      this.router.navigate(['inicio']);
    } else {
      this.generalService.setToken(this.token);
      this.generalService.setLogueado(true);
    }
    this.translateConfigService.getDefaultLanguage();
    this.lang = this.translateConfigService.getCurrentLang();

    this.generalService.recibir_token.subscribe((token) => {
      this.token = token;
    });

    this.generalService.recibir_logueado.subscribe((logueado) => {
      this.logueado = logueado;
      this.mostrar = !logueado;
    });
  }
  title = 'quetedebo-front';

  cerrarSesion() {
    localStorage.removeItem('token');
    this.generalService.setToken("");
    this.generalService.setLogueado(false);
    //window.location.href = window.location.origin + "/";
    this.router.navigate(['inicio']);
  }

}
