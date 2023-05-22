export interface ICobro {
  id: number;
  creador: number;
  nombre_creador: string;
  receptor: number;
  nombre_receptor: string;
  creacion: Date;
  titulo: string;
  texto: Text;
  revisado?: boolean;
  completado?: boolean;
  fecha_completado?: Date;
  archivado?: boolean;
  importe?: number;
}
