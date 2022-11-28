import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { Usuario } from 'src/app/interfaces/usuario';
import { CepService } from 'src/app/services/cep-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.component.html',
  styleUrls: ['./seguranca.component.css']
})
export class SegurancaComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService:UsuarioService,
   ) { }
usuario: Usuario ={};
erro:string="";
storage: Storage = localStorage
senha:string= ""
senhaClone:string=""

ngOnInit(): void {
this.usuarioService.getUsuarioApi(this.storage.getItem(`usuario`) as string).subscribe((res) =>{ this.usuario = res})
}

alterarSenha(senha:string, senhaCopy:string){
  if(senha == senhaCopy && senha.trim().length>0){
    this.usuario.senha = this.senha.replace("-","");
    this.usuarioService.putUsuarioApi(this.usuario, this.usuario.cpf as string).subscribe(()=>{window.location.reload()})
  }
  else{
    this.erro="Verifique os campos de senha, eles devem estar iguais!!"
  }
}
excluirConta() {
  this.storage.removeItem(`usuario`)
  this.usuarioService.deleteUsuarioApi(this.usuario.cpf as string).subscribe(()=>{this.router.navigate(['/home'])})
}
}
