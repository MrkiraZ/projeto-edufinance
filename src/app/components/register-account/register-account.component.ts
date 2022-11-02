import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { Endereco } from 'src/app/interfaces/endereco';
import { CepService } from '../../services/cep-service.service';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private cepService: CepService) { }
  endereco:Endereco ={
    cep:"",
    logradouro:"",
    bairro:"",
    localidade:"",
    uf:""
  }
  ngOnInit(): void {
  }
  consultaCep(cep:string){
      this.cepService.buscarCep(cep).subscribe(res=> this.endereco = res);

    console.log(this.endereco.logradouro)
    }
}
