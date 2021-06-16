import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-pagina-libros',
  templateUrl: './pagina-libros.component.html',
  styleUrls: ['./pagina-libros.component.css']
})
export class PaginaLibrosComponent implements OnInit {

  public libros: Libro[];

  constructor(private apiService: LibroService) {
    this.mostrarLibros();
  }

  mostrarLibros() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibros(token).subscribe( (result: any) => {
      console.log(result);
      this.libros = result.data;
      });
  }

  ngOnInit(): void {
  }

}
