import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-favoritos-libros',
  templateUrl: './favoritos-libros.component.html',
  styleUrls: ['./favoritos-libros.component.css']
})
export class FavoritosLibrosComponent implements OnInit {

  public librosFav: Libro[];
  public stars = [1, 2, 3, 4, 5];


  constructor(private apiService: LibroService) { 
    this.mostrarLibrosFav();
  }

  mostrarLibrosFav(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.apiService.obtenerLibrosFav(id, token).subscribe( (result: any) => {
      this.librosFav = result.data;
      for (let i = 0; i < this.librosFav.length; i++) {
        this.librosFav[i].puntuacion = Math.round(this.librosFav[i].PuntosTotales/this.librosFav[i].VecesPuntuado);
              
            }
      });
  }

  sendValueIdDetail(Titulo, Autor, Descripcion, Foto, Genero, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, Genero, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

  ngOnInit(): void {
  }

}
