export class Transaccion {
    id?:string;
    monedaOrigen: string;
    cantidadOrigen: number;
    monedaDestino: string;
    cantidadDestino: number;
    email: string;
    tasaConversion:number;


    constructor(monedaOrigen: string,cantidadOrigen: number,monedaDestino: string,cantidadDestino: number,email: string,tasaConversion:number) {
      this.monedaOrigen = monedaOrigen;
      this.cantidadOrigen = cantidadOrigen;
      this.monedaDestino = monedaDestino;
      this.cantidadDestino = cantidadDestino;
      this.email = email;
      this.tasaConversion=tasaConversion;
    }
  }
  