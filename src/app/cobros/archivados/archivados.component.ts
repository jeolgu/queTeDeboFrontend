import { Component } from '@angular/core';
import { CobrosService } from '../service/cobros.service';

@Component({
  selector: 'app-archivados',
  templateUrl: './archivados.component.html',
  styleUrls: ['./archivados.component.scss']
})
export class ArchivadosComponent {
  token: string = "b9aacd288d087a59deb93f07d1bba4ee";

  constructor(
    private cobrosService: CobrosService
  ){

  }
  ngOnInit() {
    this.cargarArchivados();
  }


  async cargarArchivados() {
    this.cobrosService.archivados(this.token).subscribe( (res) => {
      debugger;

    });
  }
}
