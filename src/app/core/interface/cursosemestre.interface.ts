import { ICurso } from "./curso.interface";
import { IDocente } from "./docente.interface";
import { IEp } from "./ep.interface";
import { ISemestre } from "./semestre.interface";

export class ICursoSemestre{
    id: number;
    curso: ICurso;
    semestre: ISemestre;
    docente: IDocente;
    Ep: IEp;
}