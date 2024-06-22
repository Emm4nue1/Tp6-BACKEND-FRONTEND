export enum CategoriaEspectador {
  Extranjero = 'Extranjero',
  Local = 'Local'
}

export class Espectador {
    _id!:any;
    apellido: string;
    nombre: string;
    dni: string;
    email: string;
    categoria: CategoriaEspectador;
  
    constructor(apellido: string, nombre: string, dni: string, email: string,categoria: CategoriaEspectador) {
      this.apellido = apellido;
      this.nombre = nombre;
      this.dni = dni;
      this.email = email;
      this.categoria = categoria;
    }
  }