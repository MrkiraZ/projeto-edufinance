import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimentacao } from '../interfaces/movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  constructor(private http: HttpClient) {
  }
  //link das informacoes rest
  baseUrl:string = "http://localhost:8080/api/movimentacoes";

  //retorna a lista de todos as movimentacoes
  public getMovimentacaosApi(): Observable<Movimentacao[]>{
   return this.http.get<Movimentacao[]>(this.baseUrl);
  }
  //retorna a lista das movimentacoes a partir de um cpf
  public getMovimentacaosPorCpfApi(cpf:string): Observable<Movimentacao[]>{
    const url = `${this.baseUrl}/buscarCpf/${cpf}`
    return this.http.get<Movimentacao[]>(url);
   }
   //retorna todas as movimentacoes a partir de uma carteira
   public getMovimentacaosPorCarteiraApi(idCarteira:number): Observable<Movimentacao[]>{
    const url = `${this.baseUrl}/buscarCarteira/${idCarteira}`
    return this.http.get<Movimentacao[]>(url);
   }
  //retorna cliente especifico (util para perfil e gestao)
  public getMovimentacaoApi(id:number): Observable<Movimentacao>{
     const url = `${this.baseUrl}/buscar/${id}`
     return this.http.get<Movimentacao>(url);
  }
  //cadastra o cliente no banco de dados
  public postMovimentacaoApi(movimentacao:Movimentacao): Observable<Movimentacao>{
   return this.http.post<Movimentacao>(this.baseUrl, movimentacao);
  }
  public putMovimentacaoApi(movimentacao:Movimentacao, id:number): Observable<Movimentacao>{
   const url = `${this.baseUrl}/alteracao/${id}`;
   return this.http.put(url,movimentacao);
  }
  public deleteMovimentacaoApi(id:number): Observable<Movimentacao>{
   const url = `${this.baseUrl}/remocao/${id}`;
   return this.http.delete(url)
  }
}
