import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ICobro } from '../models/i-cobro';
import { CobrosService } from '../service/cobros.service';

@Component({
  selector: 'app-archivados',
  templateUrl: './archivados.component.html',
  styleUrls: ['./archivados.component.scss']
})
export class ArchivadosComponent {
  token: string = "";
  cobros: ICobro[] = [];

  constructor(
    private cobrosService: CobrosService,
    private generalService: GeneralService
  ){

  }
  ngOnInit() {
    this.generalService.recibir_token.subscribe((token) => { this.token = token; });
    this.cargarArchivados();
  }


  async cargarArchivados() {
    this.cobrosService.archivados(this.token).subscribe( (res) => {
      this.cobros = res.cobros;
    });
  }
}
