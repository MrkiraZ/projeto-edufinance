import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
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
  erro:string="";
  storage: Storage = localStorage

  ngOnInit(): void {
    this.storage.removeItem(`usuario`);
    this.storage.removeItem(`admin`)
  }
  login(usuario:Usuario):void{
    let user = usuario.cpf
    let senha= usuario.senha
    if(user != null && senha != null){
      if(user == `admin` && senha ==`admin`){
        localStorage.setItem(`admin`, `admin`)

        //colocar o link de redirect do adm
      }
      this.usuarioService.getUsuarioApi(user).subscribe(
        {
          next: (res) =>{
            if(res.cpf == user && res.senha == senha){
              this.storage.setItem(`usuario`, user as string)
              this.storage.setItem(`nome`, res.nome as string)
              this.router.navigate([`/dashboard`])
            }
            //caso ache o usuario mas os dados fornecidos sejam incorretos
            else{
              this.erro=`Usuario ou senha invalidos!`
            }
          },
          //caso nao ache nenhum dado na requisicao
          error: () => {
              // throw error;
              this.erro = "Usuario ou senha invalidos!"
          },
      })

    //     (res) => {
    //     if(res.cpf == user && res.senha == senha){
    //       this.storage.setItem(`usuario`, user as string)
    //       this.router.navigate([`/dashboard`])
    //     }
    //   },
    //   (erro)=>
    //     this.erro = "Usuario ou senha invalidos"

    //   );
     }
  }
  userNotFound():boolean{
    if (this.erro.length!=0){
      return true
    }
    return false
  }
  validaCpf(cpf:string):boolean{
    const CPF = require('cpf');
    return CPF.isValid(cpf)
  }
  isCpf():boolean{
    return this.validaCpf(this.usuario.cpf as string)
  }
}
