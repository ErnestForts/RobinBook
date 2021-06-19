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

  constructor(private apiService: LibroService) { 
    this.apiService.mostrarLibrosFav();
    this.librosFav = this.apiService.librosFav;
  }

  ngOnInit(): void {
    this.apiService.mostrarLibrosFav();
  }

  sendValueIdDetail(Titulo, Autor, Descripcion, Foto, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

}
