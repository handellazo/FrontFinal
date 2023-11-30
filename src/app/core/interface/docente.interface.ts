import { IEp } from "./ep.interface";
import { IPersona } from "./persona.interface";

export class IDocente {
    id: number;
    persona: IPersona;
    ep: IEp;
}