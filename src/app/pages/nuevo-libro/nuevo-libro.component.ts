import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  public libroNew: Libro;

  constructor() {
    this.libroNew = new Libro("","","","");
  }

  crearLibro(titulo, autor, foto, description) {
    
  }

  ngOnInit(): void {
  }
}