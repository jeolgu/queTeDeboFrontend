import { Component } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.scss']
})
export class MenuNavegacionComponent {
  //public lang : any;

  constructor(
    private translateConfigService : TranslateConfigService,
    private translate: TranslateService
    ){
  }

  onInit(){
    console.log("HOLA");
    // this.translateConfigService.getDefaultLanguage();
    // this.lang = this.translateConfigService.getCurrentLang();
  }

  public onToggleSidenav = () => {
    alert('hola');
  }
}

