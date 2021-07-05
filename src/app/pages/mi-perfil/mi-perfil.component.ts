import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  public user: User;
  private url: string;
  public info: User;

  constructor(private http: HttpClient, private router: Router,private usuarioService: UsuarioService) {
    this.url = 'https://robinbook.herokuapp.com/api/users';    
    this.user = JSON.parse(localStorage.getItem('user')).user;
    this.mostrarUsuarios();
   }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')).user;
  }

  obtenerUsuarios(token): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(this.url, options);
  }

  mostrarUsuarios(): void {
    let users: User[];
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.obtenerUsuarios(token).subscribe( (result: any) => {
       users = result.data;

       for (let i = 0; i < users.length; i++) {
         if (users[i].user_id == this.user.user_id) {
           this.info = users[i];
           i = users.length;
         }
       }
      });
    }
}
