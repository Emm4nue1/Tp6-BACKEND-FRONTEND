import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EspectadorService } from './service/espectador.service';
import { CategoriaEspectador, Espectador } from '../../../models/pto3.espectador';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-espectador',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './espectador.component.html',
  styleUrl: './espectador.component.css'
})
export class EspectadorComponent {
  tipo=CategoriaEspectador;
  espectador = new Espectador("","","","",CategoriaEspectador.Local);

  constructor(private espectadorService:EspectadorService){}
  nuevoEspectador(){
    this.espectadorService.crearEspectador(this.espectador).subscribe((espectador:any) => { 
      console.log('Datos de la Transaccion:', espectador);
      this.espectador = new Espectador("","","","",CategoriaEspectador.Local);
    });}
}
