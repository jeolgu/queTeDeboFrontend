import { Component } from '@angular/core';
import { CobrosService } from '../../service/cobros.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class HistoricoEnviadosComponent {
  token: string = "b9aacd288d087a59deb93f07d1bba4ee";

  constructor(
    private cobrosService: CobrosService
  ){

  }
  ngOnInit() {
    this.cargarHistoricoEnviados();
  }


  async cargarHistoricoEnviados() {
    this.cobrosService.historicoEnviados(this.token).subscribe( (res) => {
      debugger;

    });
  }
}
