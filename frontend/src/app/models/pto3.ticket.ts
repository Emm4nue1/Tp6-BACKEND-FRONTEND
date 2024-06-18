export class Espectador {
    apellido: string;
    nombre: string;
    dni: string;
    email: string;
  
    constructor(apellido: string, nombre: string, dni: string, email: string) {
      this.apellido = apellido;
      this.nombre = nombre;
      this.dni = dni;
      this.email = email;
    }
  }
  
  export enum CategoriaEspectador {
    Extranjero = 'Extranjero',
    Local = 'Local'
  }
  
  export class Ticket extends Espectador {
    precioTicket: number;
    categoriaEspectador: CategoriaEspectador;
    fechaCompra: string;
  
    constructor(
      apellido: string,
      nombre: string,
      dni: string,
      email: string,
      precioTicket: number,
      categoriaEspectador: CategoriaEspectador,
      fechaCompra: string
    ) {
      super(apellido, nombre, dni, email);
      this.precioTicket = precioTicket;
      this.categoriaEspectador = categoriaEspectador;
      this.fechaCompra = fechaCompra;
    }
  }
  