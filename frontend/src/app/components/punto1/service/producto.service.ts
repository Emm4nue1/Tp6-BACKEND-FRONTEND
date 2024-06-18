import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private url = 'http://localhost:3000/producto/destacados';

  constructor(private http: HttpClient) {}

  traerProductos():Observable<any>{
    const headers = new HttpHeaders({ });
    return this.http.get(this.url,{ headers: headers });
  }

  traerProductosDestacados():Observable<any>{
    const headers = new HttpHeaders({ });
    return this.http.get(this.url,{ headers: headers });
  }
}
