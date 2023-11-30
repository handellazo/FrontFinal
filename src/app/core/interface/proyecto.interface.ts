import { TipoPy } from "../models/tipoPy.model";
import { IConvenio } from "./convenio";
import { ICursoSemestre } from "./cursosemestre.interface";
import { IEp } from "./ep.interface";
import { ISemestre } from "./semestre.interface";
import { IUbicacion } from "./ubicacion";

export class IProyecto {
    id: number;
    nombre: string = '';
    inicio: Date;
    fin: Date;
    anexo:  string = '';
    ciclo: string = '';
    estado:  number = 0;
    beneficiarios: number;
    presupuesto: number;
    url_doc:  string = '';
    representante:  string = '';
    convenio: IConvenio;
    ubicacion: IUbicacion;
    ep: IEp;
    tipoPY: TipoPy;
    semestre:ISemestre;
    cursoSemestre: ICursoSemestre;
  }