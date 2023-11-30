export class Persona{
    id:any;
    nombre:string;
    paterno:string;
    materno:string;
    dni:number;
    correo: string;
    telefono: number;
    rol:number;

    constructor(){
        this.nombre = '';
        this.paterno = '';
        this.materno = '';
        this.dni = 0;
        this.correo = '';
        this.telefono = 0;
        this.rol = 0;
    }
}