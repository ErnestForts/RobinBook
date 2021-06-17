import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/libro/libro';
import { User } from 'src/app/models/user';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-perfil-ranking',
  templateUrl: './perfil-ranking.component.html',
  styleUrls: ['./perfil-ranking.component.css']
})
export class PerfilRankingComponent implements OnInit {

  public usuario:User;
  public books:Libro[];
  routeState: any;
  constructor(private router: Router,private route: ActivatedRoute, private server: ServerService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.usuario = this.routeState.user ? JSON.parse(this.routeState.user) : '';
      }
    }

    this.server.get(`/book/fav/${this.usuario.user_id}`).subscribe((response: any) => {
      this.books = response.data;
    })
   }

  ngOnInit(): void {
  }

}
