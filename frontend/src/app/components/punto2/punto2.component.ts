import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransaccionService } from './service/transaccion.service';
import { FormsModule } from '@angular/forms';
import { Transaccion } from '../../models/pto2.agencia';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  trasaccion = new Transaccion("",0,"",0,"",0);
  constructor (private trasaccionService:TransaccionService){}

  nuevaOperacion(){
    this.trasaccionService.crearOperacion(this.trasaccion).subscribe((operacion:any) => { 
      console.log('Datos de la Transaccion:', operacion);
/*       this.trasaccion = new Transaccion("",0,"",0,""); */
    });}
    
  intercambio(origen:string,destino:string,monto:number){
    this.trasaccionService.getTransaccion(origen,destino,monto).subscribe((resultado:any)=> { 
      console.log('Datos del intercambio de moneda:', resultado);
      this.trasaccion.cantidadDestino = resultado.result;
      this.trasaccion.tasaConversion= resultado.info.rate;
    });}
}
