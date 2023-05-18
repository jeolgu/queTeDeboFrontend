import { Component } from '@angular/core';
import { CobrosService } from '../../service/cobros.service';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.scss']
})
export class ActivosRecibidosComponent {

  token: string = "b9aacd288d087a59deb93f07d1bba4ee";

  constructor(
    private cobrosService: CobrosService
  ){

  }
  ngOnInit() {
    this.cargarCobrosRecibidos();
  }


  async cargarCobrosRecibidos() {
    this.cobrosService.activosRecibidos(this.token).subscribe( (res) => {
      debugger;

    });
  }

}
