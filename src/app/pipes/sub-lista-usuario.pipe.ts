import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Pipe({
  name: 'subListaUsuario'
})
export class SubListaUsuarioPipe implements PipeTransform {

  transform(usuarios: Usuario[], input: string): Usuario[] {
    if(!input){
      return usuarios;
    }
    return usuarios.filter(usuario=>
      usuario.nome?.toLowerCase().includes(input.toLowerCase()));
  }

}
