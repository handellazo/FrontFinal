export class Convenio{
    id: number;
    nombre:  string;
    inicio: Date; 
    fin: Date; 
    referencia:  string;
    tipo: number;
    ubicacion: number;
    archivo:  string;
    estado:  number;

    constructor(){
        this.nombre = '';
        this.inicio = new Date;
        this.fin = new Date;
        this.tipo = 0;
        this.referencia = '';
        this.ubicacion = 0;
        this.archivo = '';
        this.estado = 0;
    }
}