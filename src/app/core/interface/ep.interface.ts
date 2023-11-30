import { IFacultad } from "./facultad.interface";

export class IEp{

    id: number;
    nombre:  string = '';
    facultad: IFacultad;
}