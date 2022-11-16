import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carteira } from 'src/app/interfaces/carteira';
import { Categoria } from 'src/app/interfaces/categoria';
import { Usuario } from 'src/app/interfaces/usuario';
import { CarteiraService } from 'src/app/services/carteira.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Movimentacao } from '../../interfaces/movimentacao';

@Component({
  selector: 'app-historico-carteira',
  templateUrl: './historico-carteira.component.html',
  styleUrls: ['./historico-carteira.component.css']
})
export class HistoricoCarteiraComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService:UsuarioService,
    private carteiraService:CarteiraService,
    private movimentacaoService:MovimentacaoService,
    private categoriaService: CategoriaService) { }
    //
  usuario: Usuario ={};
  carteiras:Carteira[]=[]
  carteira: Carteira={}
  movimentacoes:Movimentacao[]=[]
  movimentacao:Movimentacao={}
  categorias:Categoria[]=[]
  categoria: Categoria={}
  //
  addMovimentacao:boolean=false;
  erro:string="";
  storage: Storage = localStorage;

ngOnInit(): void {
  this.usuarioService.getUsuarioApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{ this.usuario = res})
  this.carteiraService.getCarteirasPorCpfApi(this.storage.getItem(`usuario`) as string).subscribe(res=>{this.carteiras=res})
  this.categoriaService.getCategoriasApi().subscribe(res=>{this.categorias=res})
}
  incluirCarteira(carteira:Carteira){
    carteira.cpf= this.storage.getItem(`usuario`) as string
    this.carteiraService.postCarteiraApi(carteira).subscribe(() =>this.router.navigate([this.router.url]));
    window.location.reload();

  }
  incluirMovimentacao(movimentacao:Movimentacao){
    this.movimentacaoService.postMovimentacaoApi(movimentacao).subscribe(()=>this.router.navigate([this.router.url]))
    this.addMovimentacao=false
    window.location.reload()
  }
  incluirCategoria(categoria:Categoria){
    this.categoriaService.postCategoriaApi(categoria).subscribe(()=> this.router.navigate([this.router.url]))
  }
  removerCarteira(idCarteira:number){
    this.carteiraService.deleteCarteiraApi(idCarteira).subscribe(() =>this.router.navigate([this.router.url]))
    window.location.reload()
  }
  loadMovimentacoes(idCarteira:number){
    this.movimentacoes=[]
    this.ngOnInit();
    this.movimentacaoService.getMovimentacaosPorCarteiraApi(idCarteira).subscribe(res =>{this.movimentacoes=res})
  }

}
