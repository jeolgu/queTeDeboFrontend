import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Utilidades } from 'src/app/utilidades';
import { ICobro } from '../models/i-cobro';
import { CobrosService } from '../service/cobros.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../../utilidades/confirmacion/confirmacion.component';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.scss']
})
export class CobroComponent implements OnInit {
  @Input() cobro: ICobro | undefined;
  @Input() tipo: string | undefined;
  imagen: string = "";
  pendienteRevision: boolean = true;
  menu_pedir_revision: boolean = true;
  menu_completar: boolean = true;
  menu_archivar: boolean = true;
  token: string = "";

  constructor(
    private cobrosService: CobrosService,
    private generalService: GeneralService,
    private utilidades: Utilidades,
    private dialogo: MatDialog
  ) { }

  ngOnInit(): void {

    this.generalService.recibir_token.subscribe((token) => { this.token = token; });
    if (this.cobro && this.cobro.revisado && !this.cobro.completado && !this.cobro.archivado) this.pendienteRevision = false;
    else this.pendienteRevision = true;
    this.imagen = `../../../assets/img/${this.tipo}.webp`;

    this.cargarMenuAcciones();
  }

  cargarMenuAcciones() {
    switch (this.tipo) {
      case "activos_recibidos":
        this.menu_archivar = true;
        this.menu_completar = true;
        this.menu_pedir_revision = false;
        break;
      case "historico_enviados":
        this.menu_archivar = false;
        this.menu_completar = true;
        this.menu_pedir_revision = true;
        break;
      case "historico_recibidos":
      case "archivados":
        this.menu_archivar = true;
        this.menu_completar = true;
        this.menu_pedir_revision = true;
        break;
      default:
        this.menu_archivar = false;
        this.menu_completar = false;
        this.menu_pedir_revision = true;
    }
  }

  pedirRevision() {
    if (this.cobro && this.cobro.id) {
      this.dialogo.open(ConfirmacionComponent, {
        data: `¿Desear enviar a pendiente de revisión para que lo revise ${this.cobro.nombre_creador}?`
      }).afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (confirmado) {
            if (this.cobro && this.cobro.id) {
              this.cobrosService.setPendienteRevisar(this.token, this.cobro.id).subscribe(
                (res) => {
                  this.utilidades.lanzarAlerta(res.message);
                  delete this.cobro;
                },
                (error) => {
                  let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
                  this.utilidades.lanzarAlerta(msg);
                }
              );
            }
          }
        });
    }
  }

  completarCobro() {
    if (this.cobro && this.cobro.id) {
      if (this.cobro.revisado) {
        this.cobrosService.setCompletado(this.token, this.cobro.id).subscribe(
          (res) => {
            this.utilidades.lanzarAlerta(res.message);
          },
          (error) => {
            let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
            this.utilidades.lanzarAlerta(msg);
          }
        );
      }
      else {
        let msg = "Para completar el cobro primero tiene que estar pendiente de revisión";
        this.utilidades.lanzarAlerta(msg);
      }
    }
  }

  archivarCobro() {
    if (this.cobro && this.cobro.id) {
      if (this.cobro.completado) {
        this.cobrosService.setAlmacenado(this.token, this.cobro.id).subscribe(
          (res) => {
            this.utilidades.lanzarAlerta(res.message);
          },
          (error) => {
            let msg = (error.message) ? error.message : "Ha habído un error inesperado. Intentalo de nuevo más tarde";
            this.utilidades.lanzarAlerta(msg);
          }
        );
      }
      else {
        let msg = "Para archivar el cobro primero tiene que estar completado";
        this.utilidades.lanzarAlerta(msg);
      }
    }
  }

}
