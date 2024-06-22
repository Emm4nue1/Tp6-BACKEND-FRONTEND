import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoleteriaService } from './service/boleteria.service';
import { Ticket } from '../../models/pto3.ticket';
import { FormsModule } from '@angular/forms';
import { CategoriaEspectador, Espectador } from '../../models/pto3.espectador';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component {
  ticket = new Ticket(0,"",new Espectador("", "", "", "", CategoriaEspectador.Local));
  espectadores?:any;
  idSeleccionado:any="66753397149635f97115318f";
  espectador!:Espectador;

  constructor(private boleteriaService:BoleteriaService){
    this.traerEspectadores();

    this.traerEspectador()
  }
  
  nuevoTicket(){
    this.boleteriaService.crearTicket(this.ticket).subscribe((ticket:any) => { 
      console.log('Datos de la Transaccion:', ticket);
      this.ticket = new Ticket(0,"",this.espectador);
    });}

    traerEspectadores(){this.boleteriaService.traerEspecatadores().subscribe((especatador:any) => { 
      this.espectadores=especatador;
    });}

    traerEspectador(){this.boleteriaService.traerEspecatador(this.idSeleccionado).subscribe((especatador:any) => { 
      console.log('Datos del espectador:', especatador);
      this.espectador=especatador;
    });}
}
