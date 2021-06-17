import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-pagina-libros',
  templateUrl: './pagina-libros.component.html',
  styleUrls: ['./pagina-libros.component.css']
})
export class PaginaLibrosComponent implements OnInit {

  public librosVista: Libro[];

  constructor(private apiService: LibroService) {
    this.mostrarLibros();
  }

  mostrarLibros(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibros(token).subscribe( (result: any) => {
      this.librosVista = result.data;
      });
  }

  sendValueIdDetail(Titulo, Autor, Descripcion, Foto) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion);
    this.apiService.setLibroDetail(libroDetail);
  }

  ngOnInit(): void {
  }

}
