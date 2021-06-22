import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string;
  private usuarios: User[];
  constructor(private http: HttpClient, private server: ServerService) {
    this.url = 'https://robinbook.herokuapp.com/api/users';
    this.mostrarUsuarios();
   }

   obtenerUsuarios(token): Observable<any> {
    let headers = new HttpHeaders().set("authorization", "bearer " + token);
    let options = { headers: headers };
    return this.http.get(this.url, options);
  }

  mostrarUsuarios(): void {
  let token = JSON.parse(localStorage.getItem('user')).token;
  this.obtenerUsuarios(token).subscribe( (result: any) => {
     this.usuarios = result.data;
    });
  }

  modificarUsuario(user:User){
    return this.server.request('PATCH', '/api/users/'+JSON.parse(localStorage.getItem('user')).user.user_id, {
      Email: user.Email,
      Nombre: user.Nombre,
      Apellido: user.Apellido,
      Telefono: user.Telefono,
      Frase: user.Frase,
      Foto: user.Foto
    });
  }
}
