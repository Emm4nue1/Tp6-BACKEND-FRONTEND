import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espectador } from '../../../../models/pto3.espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {
  private url = "http://localhost:3000/boleteria/cliente/";
  constructor(private http: HttpClient) {}

  crearEspectador(espectador:Espectador):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(espectador);
    return this.http.post(this.url,body,{ headers: headers });
  }
}
