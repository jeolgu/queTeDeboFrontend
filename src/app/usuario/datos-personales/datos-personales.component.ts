import { Component } from '@angular/core';
import { DatosPersonalesService } from './service/datos-personales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent {

  token: string = "b9aacd288d087a59deb93f07d1bba4ee";

  constructor(
    private datosPersonalesService: DatosPersonalesService
  ){

  }
  ngOnInit() {
    this.cargarArchivados();
  }


  async cargarArchivados() {
    this.datosPersonalesService.datosPersonales(this.token).subscribe( (res) => {
      debugger;

    });
  }

  // export class PedidoCampanyaComponent implements OnInit {
  //   @Input() access_token: string;
  //   hayInfo: boolean = false;
  //   enPreparacion: boolean = false;
  //   public pedido: IPedido = null;
  //   // public mostrarSpinner: boolean = true;
  //   public hoy: Date = new Date();
  //   public inicio: Date;
  //   public fin: Date;
  //   public boton: boolean = true;
  //   public msgWarningPedido: string = '';
  //   pantalla_activa: string;
  //   campanyas: ICampanya[];

  //   constructor(
  //     private pedidoService: PedidoService,
  //     private utilidades: Utilidades,
  //     private generalService: GeneralService
  //   ) {}

  //   ngOnInit() {
  //     this.generalService.recibir_mostrar_editor_pedido.subscribe((activo) => {
  //       this.pantalla_activa = activo ? 'pedido' : 'campanya';
  //     });

  //     this.pantalla_activa = 'campanya';
  //     this.generalService.setMostrarEditorPedido(false);

  //     this.cargarCampanyas();
  //     // this.cargarPedido();
  //   }

  //   async doRefresh(event) {
  //     // await this.cargarPedido();
  //     event.target.complete();
  //   }

  //   async cargarPedido(id_campanya: number) {
  //     return this.pedidoService
  //       .getPedido(this.access_token, id_campanya)
  //       .subscribe((res) => {
  //         if (res.success) {
  //           this.inicio = new Date(res.inicio);
  //           this.fin = new Date(res.fin);
  //           const momento_entrega = res.momento_entrega
  //             ? new Date(res.momento_entrega)
  //             : null;

  //           this.pedido = {
  //             id_pedido: res.id_pedido,
  //             activa: res.activa && res.activa == 't',
  //             campanya: res.campanya,
  //             inicio: this.inicio,
  //             fin: this.fin,
  //             completada: res.completada && res.completada == 't',
  //             entrega: res.entrega,
  //             detalle_pedido: res.detalle_pedido,
  //             etiqueta: res.etiqueta,
  //             id_campanya: res.id_campanya,
  //             id_temporada: res.id_temporada,
  //             momento_entrega,
  //             observaciones: res.observaciones,
  //             nombre_campanya: res.nombre_campanya,
  //             fecha_campanya: res.fecha_campanya,
  //             categoria_empleado: res.categoria_empleado,
  //             observaciones_campanya: res.observaciones_campanya,
  //             observaciones_categoria: res.observaciones_categoria,
  //           };

  //           let comprobacion = this.comprobarEstadoPedido();
  //           this.boton = comprobacion.boton;
  //           this.msgWarningPedido = comprobacion.msgWarningPedido;
  //         }
  //       });
  //   }

  //   comprobarEstadoPedido() {
  //     let obj = {
  //       boton: true,
  //       msgWarningPedido: '',
  //     };
  //     if (this.pedido.momento_entrega) {
  //       obj.boton = false;
  //       obj.msgWarningPedido = 'El pedido ya ha sido entregado';
  //       return obj;
  //     }

  //     if (this.pedido.etiqueta) {
  //       obj.boton = false;
  //       obj.msgWarningPedido = 'Pedido en preparación';
  //       return obj;
  //     }

  //     return obj;
  //   }

  //   confirmarPedido() {
  //     const pedido = {
  //       id_campanya: this.pedido.id_campanya,
  //       id_pedido: this.pedido.id_pedido,
  //       observaciones: this.pedido.observaciones,
  //       detalle_pedido: this.pedido.detalle_pedido.map((d) => {
  //         return {
  //           talla: d.talla,
  //           cantidad_pedida: d.cantidad_pedida,
  //           subprenda: d.subprenda,
  //           id_talla: d.id_talla,
  //           id_prenda: d.id_prenda,
  //         };
  //       }),
  //     };

  //     this.pedidoService.confirmarPedido(this.access_token, pedido).subscribe(
  //       (res) => {
  //         let msg;
  //         if (res.success) {
  //           this.pedido.id_pedido = res.id_pedido;
  //           this.utilidades.alert('Pedidos', 'Pedido guardado');
  //           this.cambiarVista('campanya', null);
  //         } else {
  //           this.utilidades.alert('Pedidos', res.error_description);
  //         }
  //       },
  //       (res) => {
  //         //this.utilidades.alert("Error", res.error.error_description);
  //       }
  //     );
  //   }

  //   async cargarCampanyas() {
  //     this.pedidoService.getCampanyas(this.access_token).subscribe((res) => {
  //       this.campanyas = res;
  //     });
  //   }

  //   cambiarVista(pantalla_nueva: string, id_campanya?: number) {
  //     if (pantalla_nueva == 'pedido') {
  //       this.utilidades
  //         .showLoading('Cargando pedido de la campaña seleccionada')
  //         .then((_) => {
  //           this.pantalla_activa = pantalla_nueva;
  //           this.cargarPedido(id_campanya).then((_) => {
  //             setTimeout(() => {
  //               this.utilidades.hideLoading();
  //               this.generalService.setMostrarEditorPedido(true);
  //             }, 500);
  //           });
  //         });
  //     } else {
  //       this.pedido = null;
  //       this.pantalla_activa = pantalla_nueva;
  //       this.generalService.setMostrarEditorPedido(false);
  //     }
  //   }
  // }


}
