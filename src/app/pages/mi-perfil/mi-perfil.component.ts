import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  public user: User;

  constructor(private router: Router,private usuarioService: UsuarioService) {
    this.user = JSON.parse(localStorage.getItem('user')).user;    
   }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')).user
  }
}
