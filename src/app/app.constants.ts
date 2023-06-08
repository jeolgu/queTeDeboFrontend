import { Pipe, PipeTransform } from '@angular/core';
export const URL = "http://127.0.0.1:8000/api"; // conexió al server simfony
// export const URL = "http://localhost:8000/api"; // conexión al server simfony

@Pipe({ name: 'diasSemana' })
export class DiasSemana implements PipeTransform {
    private dias = ['domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'];

    transform(value: any, ...args: any[]) {
        return this.dias[value];
    }
}

@Pipe({ name: 'mesesAnyo' })
export class MesesAnyo implements PipeTransform {
    private meses = ['enero', 'febrero', 'marzo',
        'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre',
        'octubre', 'noviembre', 'diciembre',
        'enero'];


    transform(value: any, ...args: any[]) {
        return this.meses[value];
    }
}
