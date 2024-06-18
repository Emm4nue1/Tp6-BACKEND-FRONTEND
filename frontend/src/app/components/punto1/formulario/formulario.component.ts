import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NuevoProductoService } from './service/nuevo-producto.service';
import { Producto } from '../../../models/pto1.producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  producto = new Producto ("","","",0,0,false);
  constructor(private productoService:NuevoProductoService){}

  nuevoProducto() {
    this.productoService.crearProducto(this.producto).subscribe((producto:any) => {
      // Lógica después de crear el producto, por ejemplo:
      console.log('Producto creado:', producto);
      // Mostrar mensaje de éxito, actualizar lista de productos, etc.
    });
    // Restablece el objeto producto a un nuevo objeto con valores predeterminados
    this.producto = new Producto("", "", "", 0, 0, false);
  }
  
}
