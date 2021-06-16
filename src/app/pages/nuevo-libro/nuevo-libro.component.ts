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

  crearLibro(titulo, autor, foto, description) {
    let libroNew = new Libro(titulo, autor, foto, description);
    let t = "";
    console.log(libroNew);
    this.apiService.anyadirLibro(libroNew, t);
  }

  ngOnInit(): void {
  }
}