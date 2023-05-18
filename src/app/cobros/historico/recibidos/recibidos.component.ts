import { Component } from '@angular/core';
import { CobrosService } from '../../service/cobros.service';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class HistoricoRecibidosComponent {
  token: string = "b9aacd288d087a59deb93f07d1bba4ee";

  constructor(
    private cobrosService: CobrosService
  ){

  }
  ngOnInit() {
    this.cargarHistoricoRecibidos();
  }


  async cargarHistoricoRecibidos() {
    this.cobrosService.historicoRecibidos(this.token).subscribe( (res) => {
      debugger;

    });
  }
}
