import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
   }
   //link das informacoes rest
   baseUrl:string = "http://localhost:8080/api/usuarios";

   //retorna a lista de todos os clientes
   public getUsuariosApi(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl);
   }

   //retorna cliente especifico (util para perfil e gestao)
   public getUsuarioApi(cpf:string): Observable<Usuario>{
      const url = `${this.baseUrl}/buscar/${cpf}`
      return this.http.get<Usuario>(url);
   }
   //cadastra o cliente no banco de dados
   public postUsuarioApi(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario);
   }
   public putUsuarioApi(usuario:Usuario, cpf:string): Observable<Usuario>{
    const url = `${this.baseUrl}/alteracao/${cpf}`;
    return this.http.put(url,usuario);
   }
   public deleteUsuarioApi(cpf:string): Observable<Usuario>{
    const url = `${this.baseUrl}/remocao/${cpf}`;
    return this.http.delete(url)
   }
}
