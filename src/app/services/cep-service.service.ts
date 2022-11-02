import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpCliente: HttpClient) { }
  buscarCep(cep: string) {
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}
