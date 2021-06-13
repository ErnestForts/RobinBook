import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  constructor() {}

  // constructor(private headerService: HeaderService) { }

  ponTitulo(): void {
    // this.headerService.setTitle('Nuevo Libro');
  }

  ngOnInit(): void {
    this.ponTitulo()
  }
}