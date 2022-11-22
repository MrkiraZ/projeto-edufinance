import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { Movimentacao } from 'src/app/interfaces/movimentacao';
import { Usuario } from 'src/app/interfaces/usuario';
import { CepService } from 'src/app/services/cep-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MovimentacaoService } from '../../services/movimentacao.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
              private router: Router,
              private usuarioService:UsuarioService,
              private MovimentacaoService:MovimentacaoService,
              private cepService: CepService) { }
  usuario: Usuario ={};
  endereco:Endereco={};
  movimentacoes:Movimentacao[]=[]
  erro:string="";
  storage: Storage = localStorage
  editar:boolean= false

  ngOnInit(): void {
    this.usuarioService.getUsuarioApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{ this.usuario = res})
    this.MovimentacaoService.getMovimentacaosPorCpfApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{this.movimentacoes=res})
  }
  consultaCep(cep:string){
    this.cepService.buscarCep(cep).subscribe(res=> this.endereco = res);
  }
  updateResumo(endereco:Endereco){
    this.usuario.cep = this.endereco.cep?.replace("-","");
    this.usuario.logradouro = this.endereco.logradouro
    this.usuario.bairro = this.endereco.bairro;
    this.usuario.cidade = this.endereco.localidade
    this.usuario.uf = this.endereco.uf;
    this.usuarioService.putUsuarioApi(this.usuario, this.usuario.cpf as string).subscribe(()=>{window.location.reload()})
  }

}

