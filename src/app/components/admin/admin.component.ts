import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  id:string='';
  senha:string=''
  erro:string="";
  storage: Storage = localStorage
  ngOnInit(): void {
    this.storage.removeItem('admin')
  }
  validarAdmin(id:string,senha:string){
    if(id != null &&  senha != null){
      if(id=='admin' && senha=='admin'){
        this.storage.setItem('admin', 'admin')
        this.router.navigate(['gestao'])
        return true
      }
    }
    this.erro="ID incorreto"
    return false
  }

}
