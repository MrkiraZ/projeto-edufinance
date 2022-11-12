import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from '../interfaces/carteira';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) {
  }
  //link das informacoes rest
  baseUrl:string = "http://localhost:8080/api/carteiras";

  //retorna a lista de todos os clientes
  public getCarteirasApi(): Observable<Carteira[]>{
   return this.http.get<Carteira[]>(this.baseUrl);
  }
  public getCarteirasPorCpfApi(cpf:string): Observable<Carteira[]>{
    const url = `${this.baseUrl}/${cpf}`
    return this.http.get<Carteira[]>(url);
   }

  //retorna cliente especifico (util para perfil e gestao)
  public getCarteiraApi(id:number): Observable<Carteira>{
     const url = `${this.baseUrl}/buscar/${id}`
     return this.http.get<Carteira>(url);
  }
  //cadastra o cliente no banco de dados
  public postCarteiraApi(carteira:Carteira): Observable<Carteira>{
   return this.http.post<Carteira>(this.baseUrl, carteira);
  }
  public putCarteiraApi(carteira:Carteira, id:number): Observable<Carteira>{
   const url = `${this.baseUrl}/alteracao/${id}`;
   return this.http.put(url,carteira);
  }
  public deleteCarteiraApi(id:number): Observable<Carteira>{
   const url = `${this.baseUrl}/remocao/${id}`;
   return this.http.delete(url)
  }
}
