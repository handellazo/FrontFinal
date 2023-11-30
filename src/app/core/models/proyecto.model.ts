export class Proyecto {
  id: any;
  nombre: string;
  inicio: Date;
  fin: Date;
  anexo:  string;
  ciclo: string;
  estado: number;
  beneficiarios: number;
  presupuesto: number;
  url_doc:  string;
  representante:  string;
  convenio: number;
  ubicacion: number;
  ep: number;
  tipoPY: number;
  semestre:number;
  cursoSemestre: number;

    constructor(){
      this.nombre = '';
      this.inicio = new Date;
      this.fin = new Date;
      this.anexo = '';
      this.ciclo = '';
      this.estado = 0;
      this.beneficiarios = 0;
      this.presupuesto = 0;
      this.url_doc = '';
      this.representante = '';
      this.convenio = 0;
      this.ubicacion = 0;
      this.ep = 0;
      this.tipoPY = 0;
      this.semestre = 0;
      this.cursoSemestre = 0;
    }
  }