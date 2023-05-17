export interface ICobro {
  id: number;
  creador: number;
  receptor: number;
  creacion: Date;
  titulo: string;
  texto: Text;
  revisado?: boolean;
  completado?: boolean;
  fecha_completado?: Date;
  archivado?: boolean;
}
