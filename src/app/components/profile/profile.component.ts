import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
              private router: Router,
              private usuarioService:UsuarioService) { }
  usuario: Usuario ={};
  erro:string="";
  storage: Storage = localStorage

  ngOnInit(): void {
    this.usuarioService.getUsuarioApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{ this.usuario = res})
  }

}

