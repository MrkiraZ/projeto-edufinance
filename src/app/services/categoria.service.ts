import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {
  }
  //link das informacoes rest
  baseUrl:string = "http://localhost:8080/api/categorias";

  //retorna a lista de todos as categorias
  public getCategoriasApi(): Observable<Categoria[]>{
   return this.http.get<Categoria[]>(this.baseUrl);
  }

  //retorna categoria especifica (util para perfil e gestao)
  public getCategoriaApi(id:number): Observable<Categoria>{
     const url = `${this.baseUrl}/buscar/${id}`
     return this.http.get<Categoria>(url);
  }
  //cadastra o categoria no banco de dados
  public postCategoriaApi(categoria:Categoria): Observable<Categoria>{
   return this.http.post<Categoria>(this.baseUrl, categoria);
  }
  public putCategoriaApi(categoria:Categoria, id:number): Observable<Categoria>{
   const url = `${this.baseUrl}/alteracao/${id}`;
   return this.http.put(url,categoria);
  }
  public deleteCategoriaApi(id:number): Observable<Categoria>{
   const url = `${this.baseUrl}/remocao/${id}`;
   return this.http.delete(url)
  }
}
