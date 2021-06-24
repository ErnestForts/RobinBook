import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from 'src/app/services/libro.service';
@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  constructor(private apiService: LibroService) {
  }

  crearLibro(titulo, autor, foto, descripcion, genero) {
    let libroNew = new Libro(titulo, autor, foto, descripcion, genero);
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.anyadirLibro(libroNew, token);
  }

  ngOnInit(): void {
  }
}