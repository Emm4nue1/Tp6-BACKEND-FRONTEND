import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductoService } from './service/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
   productos?:any;
    constructor (private productoService:ProductoService) {}

    traerProductos() {
      this.productoService.traerProductosDestacados().subscribe((productosDestacados:any) => {
        console.log('Productos:', productosDestacados);
        this.productos=productosDestacados;
      });
    }

}
