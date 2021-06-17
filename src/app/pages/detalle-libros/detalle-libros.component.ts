import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro/libro';
import { LibroService } from 'src/app/services/libro.service';
import { Coments } from 'src/app/models/coments/coments';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {

public libroVista: Libro;
public coments: Coments[];

  constructor(private apiService: LibroService) { 
    this.libroVista = this.apiService.libroDetail;
    this.mostrarComents(this.libroVista.libro_id);
  }

  mostrarComents(id: string): void {
    let token = JSON.parse(localStorage.getItem('user')).token;
    this.apiService.obtenerComentsById(id, token).subscribe( (result: any) => {
      console.table(result.data);
      this.coments = result.data;
      });
  }

  ngOnInit(): void {
  }

}
