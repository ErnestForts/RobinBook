import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  public user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')).user;    
   }
  ngOnInit(): void {
  }

}
