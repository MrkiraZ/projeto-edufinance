import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  storage:Storage = localStorage
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
