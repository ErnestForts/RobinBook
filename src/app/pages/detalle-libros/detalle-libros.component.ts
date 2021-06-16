import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {

@Input() idlibro;
public libroVista: Libro;

  constructor(private apiService: LibroService) { 
    this.idlibro = 1;
    this.mostrarLibro(this.idlibro);
  }

  mostrarLibro(id) {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerLibro(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.libroVista = result.data;
      });
  }

  ngOnInit(): void {
  }

}
