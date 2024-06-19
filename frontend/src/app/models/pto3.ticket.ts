export enum CategoriaEspectador {
  Extranjero = 'Extranjero',
  Local = 'Local'
}

export class Ticket {
  precioTicket: number;
  categoriaEspectador: CategoriaEspectador;
  fechaCompra: string; 
  espectador: string; // modificar

  constructor(precioTicket: number,categoriaEspectador: CategoriaEspectador,fechaCompra: string,espectador: string){
    this.precioTicket = precioTicket;
    this.categoriaEspectador = categoriaEspectador;
    this.fechaCompra = fechaCompra;
    this.espectador = espectador;
  }
}
