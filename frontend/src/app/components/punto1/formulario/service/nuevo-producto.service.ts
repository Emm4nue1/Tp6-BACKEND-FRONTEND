import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Producto } from '../../../../models/pto1.producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NuevoProductoService {
  private url = "http://localhost:3000/producto/";

  constructor(private http: HttpClient) { }

  crearProducto(producto:Producto):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(producto);
    return this.http.post(this.url,body,{ headers: headers });
  }

/*   traerProductos():Observable<any>{
    const headers = new HttpHeaders({  });
    return this.http.get(this.url,{ headers: headers });
  } */

  borrarProducto():Observable<any>{
    const headers = new HttpHeaders({  });
    return this.http.delete(this.url,{ headers: headers });
  }
  
  actualizarProducto(producto:Producto):Observable<any>{
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    const body = JSON.stringify(producto);
    return this.http.put(this.url+producto.id,body,{ headers: headers });
  }

  
}
