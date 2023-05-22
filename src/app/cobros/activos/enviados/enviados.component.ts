import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ICobro } from '../../models/i-cobro';
import { CobrosService } from '../../service/cobros.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class ActivosEnviadosComponent implements OnInit{
  token: string = "";
  cobros: ICobro[] = [];

  constructor(
    private cobrosService: CobrosService,
    private generalService: GeneralService
  ){

  }
  ngOnInit() {
    this.generalService.recibir_token.subscribe((token) => { this.token = token; });

    this.cargarCobrosActivos();
  }


  async cargarCobrosActivos() {
    this.cobrosService.activosEnviados(this.token).subscribe( (res) => {
      this.cobros = res.cobros;
    });
  }
}
