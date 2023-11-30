import { ITipoConvenio } from "./tipoconvenio";
import { IUbicacion } from "./ubicacion";

export class IConvenio {
    id: number;
    nombre:  string;
    inicio: Date; 
    fin: Date; 
    tipo: ITipoConvenio;
    referencia:  string; 
    ubicacion: IUbicacion;
    archivo:  string;
    estado:  number;
}
