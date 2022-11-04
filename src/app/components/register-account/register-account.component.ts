import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CepService } from '../../services/cep-service.service';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private cepService: CepService) { }
  endereco:Endereco ={}
  usuario:Usuario={};
  erro!:string;
  storage:Storage = localStorage;
  ngOnInit(): void {
    this.storage.removeItem(`usuario`)
    this.usuario ={
      cpf: "",
      nome: "",
      email:"",
      sexo:"",
      dtNascimento: new Date,
      senha: "",
      idPerfil: 0,
      nomePerfil:"",
      logradouro: "",
      bairro: "",
      cidade: "",
      cep: "",
      uf: ""
        }
    this.endereco ={
      cep:"",
      logradouro:"",
      bairro:"",
      localidade:"",
      uf:""
    }
  }
  consultaCep(cep:string){
      this.cepService.buscarCep(cep).subscribe(res=> this.endereco = res);
    }
    validaCpf(cpf:string):boolean{
      const CPF = require('cpf');
      return CPF.isValid(cpf)
    }
  incluir(usuario:Usuario):void{
    //setando as informacoes de endereco
    usuario.cep = this.endereco.cep?.replace("-","");
    usuario.logradouro = this.endereco.logradouro
    usuario.bairro = this.endereco.bairro;
    usuario.cidade = this.endereco.localidade
    usuario.uf = this.endereco.uf;
    this.usuarioService.postUsuarioApi(usuario).subscribe(() =>this.router.navigate(["profile"]));

  }
}
