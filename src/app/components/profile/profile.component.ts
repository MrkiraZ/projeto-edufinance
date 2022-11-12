import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from 'src/app/interfaces/movimentacao';
import { Usuario } from 'src/app/interfaces/usuario';
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
              private MovimentacaoService:MovimentacaoService) { }
  usuario: Usuario ={};
  movimentacoes:Movimentacao[]=[]
  erro:string="";
  storage: Storage = localStorage

  ngOnInit(): void {
    this.usuarioService.getUsuarioApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{ this.usuario = res})
    this.MovimentacaoService.getMovimentacaosPorCpfApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{this.movimentacoes=res})
    console.log(this.movimentacoes)
  }

}

