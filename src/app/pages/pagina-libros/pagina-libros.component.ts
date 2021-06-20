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
  public statusClass1 = 'not-active';
  public statusClass2 = 'not-active';
  public statusClass3 = 'not-active';
  public statusClass4 = 'not-active';
  public statusClass5 = 'not-active';
  public statusClass6 = 'not-active';
  public statusClass7 = 'not-active';

  constructor(private apiService: LibroService) {
    this.mostrarLibros();
  }

  mostrarLibros(): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibros(token).subscribe( (result: any) => {
      this.librosVista = result.data;
      });
  }

  sendLibroDetail(Titulo, Autor, Descripcion, Foto, Genero, libro_id) {
    let libroDetail = new Libro(Titulo, Autor, Foto, Descripcion, Genero, libro_id);
    this.apiService.setLibroDetail(libroDetail);
  }

  changeVista(buscar: string) {
    this.librosVista = this.librosVista.filter(libro => libro.Genero.includes(buscar));
  }

  buscarTitulo(titulo: string) {
    this.librosVista = this.librosVista.filter(libro => libro.Titulo.includes(titulo));
  }

  setActive(number: string) {
    if(number == '1') this.statusClass1 = 'active';
    else if (number == '2') this.statusClass2 = 'active';
    else if (number == '3') this.statusClass3 = 'active';
    else if (number == '4') this.statusClass4 = 'active';
    else if (number == '5') this.statusClass5 = 'active';
    else if (number == '6') this.statusClass6 = 'active';
    else if (number == '7') this.statusClass7 = 'active';
  }

  ngOnInit(): void {
  }

}
