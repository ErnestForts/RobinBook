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
    this.mostrarLibrosFav();
  }

  mostrarLibrosFav(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let id = JSON.parse(localStorage.getItem('user')).user.user_id;
    this.apiService.obtenerLibrosFav(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.librosFav = result.data;
      });
  }

  sendValueIdDetail(Titulo, Autor, Descripcion, Foto, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

  ngOnInit(): void {
  }

}
