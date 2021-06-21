import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/libro/libro';
import { User } from 'src/app/models/user';
import { LibroService } from 'src/app/services/libro.service';
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
  noBooks: boolean;
  public stars = [1, 2, 3, 4, 5];
  constructor(private router: Router,private route: ActivatedRoute, private apiService: LibroService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.usuario = this.routeState.user ? JSON.parse(this.routeState.user) : '';
      }
    } 
    this.getBooks();   

    // this.server.get(`/book/fav/${this.usuario.user_id}`).subscribe((response: any) => {
    //   this.books = response.data;
    //   console.log(this.books);
    //   if(!this.books.length){
    //     this.noBooks = true; 
    //   }
      
    //   this.books.forEach(element => {
    //     element.puntuacion = Math.round(element.PuntosTotales/element.VecesPuntuado);
    //   });
    //S})
   }

  ngOnInit(): void {
  }

  sendLibroDetail(Titulo, Autor, Descripcion, Foto, Genero, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, Genero, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

  getBooks(){
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibrosFav(this.usuario.user_id.toString(),token).subscribe( (response : any) => {
      this.books = response.data;
      if(!this.books.length){
        this.noBooks = true; 
      }
      
      this.books.forEach(element => {
        element.puntuacion = Math.round(element.PuntosTotales/element.VecesPuntuado);
      });
    });
  }
} 
