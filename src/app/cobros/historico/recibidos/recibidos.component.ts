import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ICobro } from '../../models/i-cobro';
import { CobrosService } from '../../service/cobros.service';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class HistoricoRecibidosComponent {
  token: string = "";
  cobros: ICobro[] = [];

  constructor(
    private cobrosService: CobrosService,
    private generalService: GeneralService
  ){

  }
  ngOnInit() {
    this.generalService.recibir_token.subscribe((token) => { this.token = token; });
    this.cargarHistoricoRecibidos();
  }


  async cargarHistoricoRecibidos() {
    this.cobrosService.historicoRecibidos(this.token).subscribe( (res) => {
      this.cobros = res.cobros;
    });
  }
}
