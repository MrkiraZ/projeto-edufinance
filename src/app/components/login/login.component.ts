import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private usuarioService:UsuarioService,
              ) { }
  usuario: Usuario ={};
  erro!:string;
  storage: Storage = localStorage

  ngOnInit(): void {
    this.storage.removeItem(`usuario`);
  }
  login(usuario:Usuario):void{
    let user = usuario.cpf
    let senha= usuario.senha
    if(user != null && senha != null){
      this.usuarioService.getUsuarioApi(user).subscribe((res) => {
        if(res.cpf == user && res.senha == senha){
          this.storage.setItem(`usuario`, user as string)
          this.router.navigate([`/dashboard`])
        }
        if(user == `admin` && senha ==`admin`){
          localStorage.setItem(`admin`, `admin`)
          //colocar o link de redirect do adm
        }
        else{
          this.erro = "Usuario ou senha invalidos"
        }
      });
    }
  }
  validaCpf(cpf:string):boolean{
    const CPF = require('cpf');
    return CPF.isValid(cpf)
  }
  isCpf():boolean{
    return this.validaCpf(this.usuario.cpf as string)
  }
}
