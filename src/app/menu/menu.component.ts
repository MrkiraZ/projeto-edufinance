import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,
               private router: Router) { }
  storage:Storage = localStorage
  nomeUsuario:string=""
  ngOnInit(): void {
    this.isLogado()
  }
  isLogado():boolean{
    if(!this.storage.getItem("usuario")){
      return false;
    }
    return true;
  }
  deslogar(){
    this.storage.removeItem("usuario")
    console.log("desloguei")
  }
}
