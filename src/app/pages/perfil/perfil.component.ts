import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')).user;
   }

  ngOnInit(): void {
  }

}
