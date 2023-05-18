import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './translate-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public lang: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private TranslateService: TranslateService,
    ) {
  }

  ngOnInit() {
    this.translateConfigService.getDefaultLanguage();
    this.lang = this.translateConfigService.getCurrentLang();
  }
  title = 'quetedebo-front';

}
