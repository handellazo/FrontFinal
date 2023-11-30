import { IRol } from "./rol.interface";

export class IPersona{
  id:number;
  nombre:string='';
  paterno:string='';
  materno:string='';
  dni:number = 0;
  correo: string='';
  telefono: number = 0;
  rol:IRol;
}
