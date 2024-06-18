import { Injectable } from '@angular/core';
import { Transaccion } from '../../../models/pto2.agencia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private url = "http://localhost:3000/agencia";

  constructor(private http: HttpClient) { }

  getTransaccion(origen:string,destino:string,monto:number):Observable<any>{
    const urlConversor = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${origen}&to=${destino}&amount=${monto}`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'e1dce37a05msh1434ca70e470895p1255fajsn19a76c057f19',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    });
  
    return this.http.get(urlConversor, { headers: headers });
  }

  crearOperacion(transaccion:Transaccion):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(transaccion);
    return this.http.post(this.url,body,{ headers: headers });
  }
}
