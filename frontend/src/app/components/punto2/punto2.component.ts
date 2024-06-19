import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransaccionService } from './service/transaccion.service';
import { FormsModule } from '@angular/forms';
import { Transaccion } from '../../models/pto2.agencia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  trasaccion = new Transaccion("",0,"",0,"",0);
  origen:string="";
  destino:string="";
  busqueda?:any;
  constructor (private trasaccionService:TransaccionService){}

  nuevaOperacion(){
    this.trasaccionService.crearOperacion(this.trasaccion).subscribe((operacion:any) => { 
      console.log('Datos de la Transaccion:', operacion);
      this.trasaccion = new Transaccion("",0,"",0,"",0);
    });}
    
  intercambio(origen:string,destino:string,monto:number){
    this.trasaccionService.getTransaccion(origen,destino,monto).subscribe((resultado:any)=> { 
      console.log('Datos del intercambio de moneda:', resultado);
      this.trasaccion.cantidadDestino = resultado.result;
      this.trasaccion.tasaConversion= resultado.info.rate;
    });}

    traerOperaciones(){this.trasaccionService.traerTransacciones().subscribe((historial:any) => { 
      console.log('Datos del historial:', historial);
      this.busqueda=historial;
    });}

    traerOperacionesFiltro(){this.trasaccionService.traerTransaccionesFiltro(this.origen,this.destino).subscribe((filtro:any)=>{
      console.log('Datos del historial:', filtro);
      this.busqueda=filtro;
    });}

}
