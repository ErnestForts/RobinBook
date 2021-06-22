import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ServerService } from 'src/app/services/server.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public usuarios:User[];
  public filterTerm: string;
  constructor(private server: ServerService, private router: Router,private apiService: UsuarioService) {

    this.mostrarUsuarios();
    
   }

  ngOnInit(): void {
    
  }

  mostrarUsuarios(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.apiService.obtenerUsuarios(token).subscribe( (result: any) => {
      this.usuarios = result.data;
      this.usuarios.sort((a,b) => a.ranking < b.ranking && 1 || -1)
       });
  }

  userDetail(i:number){
    this.router.navigate(['ranking/perfil',i], {
      state: {
        user: JSON.stringify(this.usuarios[i])
      }
    });
  }

}
