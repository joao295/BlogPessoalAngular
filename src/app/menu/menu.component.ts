import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private router:Router

  nome = environment.nome
  foto = environment.foto

  constructor() { }

  ngOnInit()  {
  }

  sair(){
    this.router.navigate(['/entrar'])
  environment.token = ''
  environment.nome = ''
  environment.foto = ''
  environment.id = 0
  }
}
