import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  constructor(private router: Router,
              private usuarioService: UsuarioService) { }
    usuarios:Usuario[]=[]
  ngOnInit(): void {
    this.usuarioService.getUsuariosApi().subscribe(res =>{this.usuarios=res})
  }
  remover(cpf:string){
    return this.usuarioService.deleteUsuarioApi(cpf as string).subscribe(res =>{
      window.location.reload();
    })
  }

}
