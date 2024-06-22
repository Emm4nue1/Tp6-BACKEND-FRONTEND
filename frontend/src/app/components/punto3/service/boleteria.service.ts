import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../../../models/pto3.ticket';

@Injectable({
  providedIn: 'root'
})
export class BoleteriaService {
  private url = "http://localhost:3000/boleteria/cliente/";

  constructor(private http: HttpClient) {}

  crearTicket(ticket:Ticket):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(ticket);
    return this.http.post(this.url,body,{ headers: headers });
  }

  traerEspecatadores():Observable<any>{
    const headers = new HttpHeaders({ });
    return this.http.get(this.url,{ headers: headers });
  }

  traerEspecatador(id:any):Observable<any>{
    console.log(id)
    const url = `http://localhost:3000/boleteria/cliente/${id}`;
    const headers = new HttpHeaders({ });
    return this.http.get(url,{ headers: headers });
  }
}
