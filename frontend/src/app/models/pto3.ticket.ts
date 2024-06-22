import { Espectador } from "./pto3.espectador";

export class Ticket {
  _id!:any;
  precioTicket: number;
  fechaCompra: string; 
  espectador: Espectador;

  constructor(precioTicket: number,fechaCompra: string,espectador: Espectador){
    this.precioTicket = precioTicket;
    this.fechaCompra = fechaCompra;
    this.espectador = espectador;
  }
}
